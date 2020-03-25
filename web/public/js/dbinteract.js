// URGENT
function getFolders(){
	// returns a hashmap of {foldername:[note ID]}
}

function getNote(){
	// returns an array comprised of [title, ]
}

function setNote(data){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data)
}


// NONURGENT
function verifyNameFree(name){
	// returns a boolean whether or not a user has already made a note with a certain name
}