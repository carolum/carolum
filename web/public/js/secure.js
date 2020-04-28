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