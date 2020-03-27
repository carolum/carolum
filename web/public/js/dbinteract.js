// URGENT
function getFolders(){
	// returns a hashmap of [[foldername], {foldername:[note ID]}]
	
	return [
		["someJournalNameIDK"],
		{
			someJournalNameIDK: ["asdfasdfasdf", "123123321321", "opkjl123kj"]
		}
	]
}

function getNotes(){
	// returns an array comprised of [[title], {title:id}]
	
	return [
		["asdfasdfasdf", "123123321321", "opkjl123kj"],
		{
			asdfasdfasdf:"asdf",
			123123321321:"asdf2",
			opkjl123kj:"sdjfklsdflkjsdfl"
		}
	]
}

function setNote(data){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data)
}


// NONURGENT
function verifyNameFree(name){
	// returns a boolean whether or not a user has already made a note with a certain name
}