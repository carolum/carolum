function hash(p, s){
	return argon2.hash({
		pass:p,
		salt:s,
		hashLen: 32,
		time:25,
		type:2
	})
	.then(h=>{return h;})
	.catch((e)=>{throw "Hashing error " + e;});
}

function getHash(){
	return window.localStorage.getItem("carolum-pwhash");
}

function getUint8Hash(){
	return new Uint8Array(getHash().match(/.{2}/g).map(byte => parseInt(byte, 16)));
}

// big mcthankies to https://gist.github.com/saulshanabrook/b74984677bccd08b028b30d9968623f5

function callOnStore(fn_) {
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

	var open = indexedDB.open("carolum-db", 1);

	open.onupgradeneeded = function() {
	    var db = open.result;
	    var store = db.createObjectStore("keyObject", {keyPath: "id"});
	};


	open.onsuccess = function() {
	    var db = open.result;
	    var tx = db.transaction("keyObject", "readwrite");
	    var store = tx.objectStore("keyObject");

	    fn_(store);

	    tx.oncomplete = function() {
	        db.close();
	    };
	}
}

function makeRSAKeypair(){
	return window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1,0,1]),
            hash: {name: "SHA-256"},
        },
        false,
        ["encrypt", "decrypt"]
   )
}

function encryptWithRSAKey(data, keys) {
	return window.crypto.subtle.encrypt(
        {name: "RSA-OAEP"},
        keys.publicKey,
        data
    );
}


async function decryptWithRSAKey(data, keys) {
	return new Uint8Array(await window.crypto.subtle.decrypt(
	    {
	        name: "RSA-OAEP",
	    },
	    keys.privateKey,
	    data
	));
}


async function encryptWithRSAAndSave(data) {
	var keys = await makeRSAKeypair();
	var encrypted = await encryptWithRSAKey(data, keys);
	callOnStore(function (store) {
		store.put({id: 1, keys: keys, encrypted: encrypted});
	})
}


function decryptWithRSAFromSaved(fn_){
    
    callOnStore(async function (store) {
        var getData = store.get(1);
        
        var ret;
        
        getData.onsuccess = async function() {
            var keys = getData.result.keys;
            var encrypted = getData.result.encrypted;
            ret = await decryptWithRSAKey(encrypted, keys);
            fn_(ret);
        };
	});
}



async function encrypt(pt){
	var iv = crypto.getRandomValues(new Uint8Array(12));

	var hashUint8 = getUint8Hash();
	var ptUint8 = new TextEncoder().encode(pt);
	
	var key = await crypto.subtle.importKey('raw', hashUint8, {name:'AES-GCM', iv:iv}, false, ['encrypt']);
	
	var ct = Array.from(new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM', iv:iv}, key, ptUint8)));
	
	var ctB64 = btoa(ct.map(byte => String.fromCharCode(byte)).join(''));
	
	var ivHex = Array.from(iv).map(b => ('00' + b.toString(16)).slice(-2)).join('');
	
	return ivHex+ctB64;
}



async function decrypt(ct){
    var iv = ct.slice(0,24).match(/.{2}/g).map(byte => parseInt(byte, 16));
	
	var hashUint8 = getUint8Hash();

    var key = await crypto.subtle.importKey('raw', hashUint8, {name:'AES-GCM', iv:new Uint8Array(iv)}, false, ['decrypt']);
	
	var ctDecoded = atob(ct.slice(24))

    var ctUint8 = new Uint8Array(ctDecoded.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)));

    var ptBuff = await crypto.subtle.decrypt({name:'AES-GCM', iv:new Uint8Array(iv)}, key, ctUint8);
    var pt = new TextDecoder().decode(ptBuff);

    return pt;
}