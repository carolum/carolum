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


function loadNoteToEdit(noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).once("value", (snapshot)=>{
		ret = snapshot.val();
		var t = {};
		
		editEntry.content.text = ret.text;
		editEntry.content.title = ret.title;
		
	});
}



function addNoteToJournal(noteID, noteTitle, journalID){
	// data should be 
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids').child(noteID).set({title:noteTitle, id_:noteID});
}

function newJournal(name){
	// data should be 
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push({name:name})
}

function setNote(data){
	return firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data).key
}

function updateNote(data, noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).set(data)
}


function signOut(){
	firebase.auth().signOut();
}



