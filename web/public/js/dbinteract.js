// URGENT
function updateJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').limitToLast(5).on("value", (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		for(let [key, val] of Object.entries(ret).reverse()){
			t[val["name"]]=val["ids"];
		}
		dashboard.journals=t;
	});
}


function updateNotesListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').limitToLast(5).on("value", (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		for(let [key, val] of Object.entries(ret).reverse()){
			t[key]={text:val["text"], title:val["title"]};
		}
		dashboard.notes=t;
	});
}



function addNoteToJournal(noteID, noteTitle, journalID){
	// data should be 
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+"/ids").child(noteID).set({title:noteTitle, id_:noteID});
}

function newJournal(name){
	// data should be 
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push({name:name, ids:[]})
}

function setNote(data){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data)
}


function signOut(){v
	firebase.auth().signOut();
}




// NONURGENT
function verifyNameFree(name){
	// returns a boolean whether or not a user has already made a note with a certain name
}