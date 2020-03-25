function hash(p, s){
	console.log('ok');
	
	return argon2.hash({pass:p, salt:s})
	.then(h=>{return h;})
	.catch((e)=>{throw "Hashing error " + e;});
}

function getHash(){
	return window.localStorage.getItem("carolum-pwhash");
}

function encrypt(pt){
	let key = aesjs.utils.utf8.toBytes(getHash().substring(0,32));
	pt = aesjs.utils.utf8.toBytes(pt);
	
	let aesCtr = new aesjs.ModeOfOperation.ctr(key);
	let encryptedBytes = aesCtr.encrypt(pt);
	
	return aesjs.utils.hex.fromBytes(encryptedBytes);
}

function decrypt(hexCT){
	let key = aesjs.utils.utf8.toBytes(getHash().substring(0,32));
	let encryptedBytes = aesjs.utils.hex.toBytes(hexCT);
	
	let aesCtr = new aesjs.ModeOfOperation.ctr(key);
	let decryptedBytes = aesCtr.decrypt(encryptedBytes);
	
	
	return aesjs.utils.utf8.fromBytes(decryptedBytes);
}