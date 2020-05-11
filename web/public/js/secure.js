/*
Flow:

User signs up / logs in
-> Argon2id hash
-> Generate RSA-OAEP keypair and encrypt with public key
-> Store object into IndexedDB
   ^ this will encrypt the AES-GCM key

On decrypt(ct):
-> Fetch object from IndexedDB
-> Decrypt with RSA-OAEP private key
   ^ this will give back the AES-GCM key
-> Decrypt ct with AES-GCM key

*/
//import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';

function hash(p, s){
	return argon2.hash({
		pass:p,
		salt:s,
		hashLen: 32,
		time:25,
		type:2
	})
	.then(h=>{return h;})
	.catch(e=>{throw "Hashing error " + e;});
}

// big mcthankies to https://gist.github.com/saulshanabrook/b74984677bccd08b028b30d9968623f5

async function saveRSAKeys(keys, encrypted) {
    let db = openDB('carolum-db', 1, {
        upgrade(db) {
            let store = db.createObjectStore('carolumRSA-Key');
        },
    });

    (await db).put('carolumRSA-Key', {
        keys:keys,
        encrypted:encrypted
    }, 1);
    
    await db.done;
}



async function encryptSaveRSA(data) {
    data = new TextEncoder().encode(data);
    
	var keys = await makeRSAKeypair();
    
	var encrypted = await encryptRSA(data, keys);
    
    saveRSAKeys(keys, encrypted);
}


async function decryptRSAFromSave(){
    let db = openDB('carolum-db', 1);
    var ret = await (await db).get("carolumRSA-Key", 1);
    
    await db.done;
    
    return await decryptRSA(ret.encrypted, ret.keys);
    
    return ret;
}


// POC for enc / decryption. WOO
async function test(){
    await encryptSaveRSA("hello");
    
    var decrypted = await decryptRSAFromSave();
    return decrypted;
}


async function encrypt(pt){
    var ptUint8 = new TextEncoder().encode(pt);
    
    var hexKey = await getAESKey();

    var hashUint8 = new Uint8Array(hexKey.match(/.{2}/g).map(byte => parseInt(byte, 16)));
    
    var iv = crypto.getRandomValues(new Uint8Array(12));
	
	var key = await crypto.subtle.importKey('raw', hashUint8, {name:'AES-GCM', iv:iv}, false, ['encrypt']);
	
	var ct = Array.from(new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM', iv:iv}, key, ptUint8)));
	
	var ctB64 = btoa(ct.map(byte => String.fromCharCode(byte)).join(''));
	
	var ivHex = Array.from(iv).map(b => ('00' + b.toString(16)).slice(-2)).join('');
	
	return ivHex+ctB64;
}


async function decrypt(ct){
    var iv = ct.slice(0,24).match(/.{2}/g).map(byte => parseInt(byte, 16));
	
    var hexKey = await getAESKey();

    var key = await crypto.subtle.importKey('raw', hexKey, {name:'AES-GCM', iv:new Uint8Array(iv)}, false, ['decrypt']);
	
	var ctDecoded = atob(ct.slice(24))

    var ctUint8 = new Uint8Array(ctDecoded.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)));

    var ptBuff = await crypto.subtle.decrypt({name:'AES-GCM', iv:new Uint8Array(iv)}, key, ctUint8);
    var pt = new TextDecoder().decode(ptBuff);

    return pt;
}


function makeRSAKeypair(){
	return window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1,0,1]),
            hash: {name: "SHA-256"},
        },
        false,
        ["encrypt", "decrypt"]
   )
}


function encryptRSA(data, keys) {
	return window.crypto.subtle.encrypt(
        {name: "RSA-OAEP"},
        keys.publicKey,
        data
    );
}


async function decryptRSA(data, keys) {
	return new Uint8Array(await window.crypto.subtle.decrypt(
	    {
	        name: "RSA-OAEP",
	    },
	    keys.privateKey,
	    data
	));
}
