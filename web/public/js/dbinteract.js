async function setJournals(mod, ret, requestSetPtr, amtExpected){
    var t = {};

    if (ret == null) return;
    
    var finKey = "";

    for(let [key, val] of Object.entries(ret).reverse()){
        var title = await decrypt(val.name);
        
        if(requestSetPtr) finKey = key;
        
        if (val.ids != null)
            for(let [key2, val2] of Object.entries(val.ids))
                val.ids[key2].title = await decrypt(val.ids[key2].title);
        
        mod.journals[title]=[key, val.ids];
    }
    
    mod.forceRefresh();
    
    if(requestSetPtr){
        mod.journalIDPointer = finKey;
        mod.hasMore = mod.lastID != finKey; 
    }
}

function updateRecentJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').orderByKey().limitToLast(5).on("value", (snapshot)=>{
		setJournals(dashboard, snapshot.val(), false, 5);
	});
}

function updateRecentNotesListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').orderByKey().limitToLast(5).on("value", async (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
        
        if(ret == null){
            return;
        }
		
		for(let [key, val] of Object.entries(ret).reverse()){
			var decText = await decrypt(val.text);
			var decTitle = await decrypt(val.title);
			t[key]={
				text: decText,
				title: decTitle
			};
		}
		dashboard.notes=t;
        dashboard.forceRefresh();
	});
}


async function updateAllJournalsListener(ptr, amt){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals');
    
    if(ptr == ""){
        ref.orderByKey().limitToLast(amt).once("value", async (snapshot)=>{
            setJournals(journalsView, snapshot.val(), true, amt);
        });
        
    } else {
        ref.orderByKey().endAt(ptr).limitToLast(amt+1).once("value", async (snapshot)=>{
            ret = snapshot.val();
            
            delete ret[ptr]
            
            setJournals(journalsView, ret, true, amt);
        });
    }
}

async function setLastID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals');
    
    var lastID = await ref.orderByKey().limitToFirst(1).once("value", (snapshot)=>{
        return 0;
    });
    
    var lastID = Object.keys(lastID.val())[0]
    
    journalsView.lastID = lastID;
}



function deleteEntry(type, entryID){
    firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+type+"/"+entryID).remove();
}


function loadNoteToEdit(noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).once("value", async (snapshot)=>{
		var ret = snapshot.val();
        
		editEntry.content.text = await decrypt(ret.text);
		editEntry.content.title = await decrypt(ret.title);
	});
}

function loadJournalToEdit(journalID, ptr, amt){
    firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).once("value", async (snapshot)=>{
		ret = snapshot.val();
        
        editEntry.title = await decrypt(ret.name);
        
        if(ret.ids == null) return;
        
        for(let [key, val] of Object.entries(ret.ids).reverse()){
            
            console.log(key, val);
            
        }
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



