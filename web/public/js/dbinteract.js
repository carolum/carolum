async function setJournals(mod, ret, requestSetPtr, amtExpected, hardSet=false){
    if (ret == null) return;
    
    var finKey = "";
    
    if(hardSet) var build = {};

    for(let [key, val] of Object.entries(ret).reverse()){
        var title = await decrypt(val.name);
        
        if(requestSetPtr) finKey = key;
        
        var t = {};
        
        if (val.ids != null){            
            for(let [key2, val2] of Object.entries(val.ids).slice(0, 5)){
                t[key2] = {};
                t[key2].title = await decrypt(val2.title);
                t[key2].id_ = val2.id_;
            }                
        }
        
        
        if (hardSet) build[title]=[key, t];
        else mod.journals[title]=[key, t];
    }
    
    if (hardSet) mod.journals = build;
    
    mod.$forceUpdate();;
    
    if(requestSetPtr){
        mod.journalIDPointer = finKey;
        mod.hasMore = mod.lastID != finKey; 
    }
}

function updateRecentJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').orderByKey().limitToLast(5).on("value", (snapshot)=>{
		setJournals(dashboard, snapshot.val(), false, 5, true);
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
        dashboard.$forceUpdate();
	});
}


async function updateAllJournalsListener(ptr, amt){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').orderByKey();
    
    if(ptr == ""){
        ref.limitToLast(amt).once("value", async (snapshot)=>{
            await setJournals(journalsView, snapshot.val(), true, amt);
        });
        
    } else {
        ref.endAt(ptr).limitToLast(amt+1).once("value", async (snapshot)=>{
            var ret = snapshot.val();
            
            delete ret[ptr]
            
            await setJournals(journalsView, ret, true, amt);
        });
    }
}

async function setLastID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value", (snapshot)=>{
        return 0;
    });
    
    var lastID = Object.keys(lastIDSnapshot.val())[0]
    
    journalsView.lastID = lastID;
}


async function setDefaultJournalID(ID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/data/');
    ref.child("defaultJournal").set(ID);    
}


async function setLastNoteIDInJournal(journalID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value", (snapshot)=>{
        return 0;
    });
    
    var lastID = Object.keys(lastIDSnapshot.val())[0]
    
    editJournal.lastID = lastID;
}



function deleteEntry(type, entryID){
    firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+type+"/"+entryID).remove();
}


function loadNoteToEdit(noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).once("value", async (snapshot)=>{
		var ret = snapshot.val();
        
		editNote.content.text = await decrypt(ret.text);
		editNote.content.title = await decrypt(ret.title);
	});
}


async function setNotes(mod, ret, requestSetPtr, amtExpected){    
    mod.title = await decrypt(ret.name);

    if(ret.ids == null) return;
    
    var finKey = "";

    for(let [key, val] of Object.entries(ret.ids).reverse()){
        
        
        if(requestSetPtr) finKey = key;

        var title = await decrypt(val.title);

        mod.notes[key] = {title: title}
    }

    mod.$forceUpdate();
    
    mod.journalIDPointer = finKey;
    mod.hasMore = mod.lastID != finKey;
}


function loadJournalToEdit(journalID, ptr, amt){
    var parentRef = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID);
    
    var ref = ptr == "" ? parentRef.limitToLast(amt) : parentRef.limitToLast(amt+1)
    
    if (ptr == ""){
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).once("value", async (snapshot)=>{
           setNotes(editJournal, snapshot.val(), true, 5);
        });
        
    } else {
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).once("value", async (snapshot)=>{
            var ret = snapshot.val();

            delete ret[ptr]

            await setJournals(journalsView, ret, true, amt);
        });
    }
    
}


async function addNoteToJournal(noteID, noteTitle, journalID){
	var encTitle = await encrypt(noteTitle);
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids').child(noteID).set({
		title:noteTitle, id_:noteID
	});
}

async function newJournal(name, isDefault){
	var name = await encrypt(name);
	var pushedObject = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push({
		name:name
	});
    
    if(isDefault){
        setDefaultJournalID(pushedObject.key);
    }
}

async function newNote(name){
    var name = await encrypt(name);
    var fillerText = await encrypt("");
    var pushedObject = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push({
        title:name,
        text:fillerText
    });
    
    return [name, pushedObject.key];
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



