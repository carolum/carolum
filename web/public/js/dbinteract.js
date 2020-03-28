// URGENT
function getFolders(){
	// returns [[foldername], {foldername:[note ID]}]
	
	return [
		["someJournalNameIDK"],
		{
			someJournalNameIDK: ["asdfasdfasdf", "123123321321", "opkjl123kj"]
		}
	]
}


function getNotes(){
	// returns [[title], {title:id}]
	
	return [
		["asdfasdfasdf", "123123321321", "opkjl123kj", "asdfasdfasdfasdfljkaskldfjalskdfjlkasjdfl"],
		{
			asdfasdfasdf:"asdf",
			123123321321:"asdf2",
			opkjl123kj:"sdjfklsdflkjsdfl",
			asdfasdfasdfasdfljkaskldfjalskdfjlkasjdfl:'ok'
		}
	]
}

function getNoteFromID(id){
	// returns [title, content]
}

function setJournal(data){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push(data)
}

function setNote(data){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data)
}


function signOut(){
	firebase.auth().signOut();
}




// NONURGENT
function verifyNameFree(name){
	// returns a boolean whether or not a user has already made a note with a certain name
}




