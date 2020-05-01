function updateRecentJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').limitToLast(5).on("value", async (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		if (ret == null) return;
		
		for(let [key, val] of Object.entries(ret).reverse()){
			var title = await decrypt(val.name);
			if (val.ids != null)
				for(let [key2, val2] of Object.entries(val.ids))
					val.ids[key2].title = await decrypt(val.ids[key2].title);
			t[title]=val.ids;
		}
		dashboard.journals=t;
	});
}

function updateAllJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').on("value", async (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		if (ret == null) return;
		
		for(let [key, val] of Object.entries(ret).reverse()){
			var title = await decrypt(val.name);
			if (val.ids != null)
				for(let [key2, val2] of Object.entries(val.ids))
					val.ids[key2].title = await decrypt(val.ids[key2].title);
			t[title]=val.ids;
		}
		journalsView.journals=t;
	});
}


function updateRecentNotesListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').limitToLast(5).on("value", async (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		for(let [key, val] of Object.entries(ret).reverse()){
			var decText = await decrypt(val.text);
			var decTitle = await decrypt(val.title);
			t[key]={
				text: decText,
				title: decTitle
			};
		}
		dashboard.notes=t;
	});
}


function loadNoteToEdit(noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).once("value", async (snapshot)=>{
		ret = snapshot.val();
		var t = {};
		
		editEntry.content.text = await decrypt(ret.text);
		editEntry.content.title = await decrypt(ret.title);
		
	});
}


async function addNoteToJournal(noteID, noteTitle, journalID){
	var encTitle = await encrypt(noteTitle);
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids').child(noteID).set({
		title:noteTitle, id_:noteID
	});
}

async function newJournal(name){
	name = await encrypt(name);
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push({
		name:name
	});
}

async function setNote(data){
	data["text"] = await encrypt(data["text"]);
	data["title"] = await encrypt(data["title"]);
	return firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data).key;
}

async function updateNote(data, noteID){
	data["text"] = await encrypt(data["text"]);
	data["title"] = await encrypt(data["title"]);
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).set(data);
}


function signOut(){
	firebase.auth().signOut();
	localStorage.removeItem("carolum-pwhash");
}



