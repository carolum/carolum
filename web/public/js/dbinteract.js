async function setJournals(mod, ret, requestSetPtr, amtExpected, hardSet=false){
    if (ret == null){
        mod.nojournals = true;
		mod.journals = {}
		mod.$forceUpdate();
		
        return;
    }
    
    if(hardSet) var build = {};
    
    let key, val;

    for([key, val] of Object.entries(ret).reverse()){
        var title = await decrypt(val.name);
        
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
    
    mod.$forceUpdate();
    
    if(requestSetPtr){
        mod.journalIDPointer = key;
        mod.hasMore = mod.lastID != key; 
    }
}

async function setNotes(mod, ret, requestSetPtr, amtExpected, hardSet=false){
    if (ret == null){
        mod.nonotes = true;
        mod.notes = {};
        mod.$forceUpdate();
        
        return;
    }
    
    if(hardSet) var build = {};
    
    let key, val;
    
    for([key, val] of Object.entries(ret).reverse()){
        var title = await decrypt(val.title);
        
        var text = await decrypt(val.text);

        if (hardSet) build[key]={title:title, text:text};
        
        else mod.notes[key]={title:title, text:text};
    }
    
    if (hardSet) mod.notes = build;
    
    mod.$forceUpdate();
    
    if(requestSetPtr){
        mod.noteIDPointer = key;
        mod.hasMore = mod.lastID != key; 
    }
}

async function setNotesFromJournal(mod, ret, requestSetPtr, amtExpected){    
    mod.title = await decrypt(ret.name);

    if(ret.ids == null) return;
    
    var title = "",
        text = "",
        noteObject,
        noteData;
    
    let key, val;

    for([key, val] of Object.entries(ret.ids).reverse()){
        
        noteObject = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+key).once("value", ()=>{});
        
        noteData = noteObject.val();
        
        title = await decrypt(noteData.title);
        text = await decrypt(noteData.text);

        mod.notes[key] = {
            title: title,
            text:text
        };
    }

    mod.$forceUpdate();
    
    mod.journalIDPointer = key;
    mod.hasMore = mod.lastID != key;
}


async function updateRecentJournalsListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').orderByKey().limitToLast(5).on("value", (snapshot)=>{
		setJournals(dashboard, snapshot.val(), false, 5, true);
	});
}

async function updateRecentNotesListener(){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').orderByKey().limitToLast(5).on("value", async (snapshot)=>{
		var ret = snapshot.val();
		var t = {};
		
		if(ret == null){
			dashboard.nonotes = true;
			dashboard.notes = {};
			dashboard.$forceUpdate();
			
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
            await setJournals(journalsView, snapshot.val(), true, amt, true);
        });
        
    } else {
        ref.endAt(ptr).limitToLast(amt+1).once("value", async (snapshot)=>{
            var ret = snapshot.val();
            
            delete ret[ptr]
            
            await setJournals(journalsView, ret, true, amt, true);
        });
    }
}


async function updateAllNotesListener(ptr, amt){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').orderByKey();
    
    if(ptr == ""){
        ref.limitToLast(amt).on("value", async (snapshot)=>{
            await setNotes(notesView, snapshot.val(), true, amt);
        });
        
    } else {
        ref.endAt(ptr).limitToLast(amt+1).on("value", async (snapshot)=>{
            var ret = snapshot.val();
            
            delete ret[ptr]
            
            await setNotes(notesView, ret, true, amt);
        });
    }
}


async function setJournalSelectors(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid);
    
    var journalSelection = [];
    
    var defaultJournalKey = await ref.child("data/defaultJournal").once("value", ()=>{});
    
    if(defaultJournalKey.val() != null){
        var defaultJournal = await ref.child("journals/"+defaultJournalKey.val()).once("value", ()=>{});
        
        if(defaultJournal.val().name != null){
            journalSelection.push({
                name: await decrypt(defaultJournal.val().name),
                id: defaultJournalKey.val()
            });
        }
    }
    
    journalSelection.push({
        name: "No Journal",
        id: ""
    });
	
	var allJournals = await ref.child("journals").once("value", ()=>{});
    
    if(allJournals.val() != null){
        for(let [key, val] of Object.entries(allJournals.val())){
            if(key === defaultJournalKey.val()) continue;

            journalSelection.push({
                name: await decrypt(val.name),
                id: key
            });
        }
    }
    
    dashboard.newNoteData.journalSelection = journalSelection;
    dashboard.newNoteData.journalID = journalSelection[0].id;
    
    dashboard.$forceUpdate();
}

async function setLastJournalID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value", ()=>{});
    
    if(lastIDSnapshot.val() == null){
        journalsView.lastID = "";
    } else {
        journalsView = Object.keys(lastIDSnapshot.val())[0];
    }
}


async function setLastNoteID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value", ()=>{});
    
    if(lastIDSnapshot.val() == null){
        notesView.lastID = "";
    } else {
        notesView.lastID = Object.keys(lastIDSnapshot.val())[0];
    }
}

async function setLastNoteIDInJournal(journalID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value", ()=>{});
    
    if(lastIDSnapshot.val() == null){
        editJournal.error = "There doesn't seem to be anything here...";
        return;
    }
    
    var lastID = Object.keys(lastIDSnapshot.val())[0]
    
    editJournal.lastID = lastID;
}



async function setDefaultJournalID(ID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/data/');
    ref.child("defaultJournal").set(ID);    
}




async function deleteNote(noteID){
    var ref = firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/notes/"+noteID);
    
    var noteData = await ref.once("value", ()=>{});
    
    var journalID = await decrypt(noteData.val().journal);
    
    if(!(journalID == ""|| journalID == null)){
        deleteFromJournal(journalID, noteID);
    }
    
    ref.remove();
}


async function deleteFromJournal(journalID, noteID){
    var ref = firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/journals/"+journalID+"/ids/"+noteID);
    
    ref.remove();
}

async function deleteJournal(journalID){
    firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/journals/"+journalID).remove();
}


function loadNoteToEdit(noteID){
	firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).once("value", async (snapshot)=>{
		var ret = snapshot.val();
        
		editNote.content.text = await decrypt(ret.text);
		editNote.content.title = await decrypt(ret.title);
	});
}


function loadJournalToEdit(journalID, ptr, amt){
    var parentRef = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID);
    
    var ref = ptr == "" ? parentRef.limitToLast(amt) : parentRef.limitToLast(amt+1)
    
    if (ptr == ""){
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).once("value", async (snapshot)=>{
           await setNotesFromJournal(editJournal, snapshot.val(), true, 5);
        });
        
    } else {
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).once("value", async (snapshot)=>{
            var ret = snapshot.val();

            delete ret[ptr]

            await setNotesFromJournal(journalsView, ret, true, amt);
        });
    }
}


async function addNoteToJournal(noteID, noteTitle, journalID){
	var encTitle = await encrypt(noteTitle);

	await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids').child(noteID).set({
		title:encTitle, id_:noteID
	});
}

async function newJournal(name, isDefault){
	var name = await encrypt(name);
	var pushedObject = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').push({
		name:name
	});
    
    if(isDefault){
        setDefaultJournalID(pushedObject.key);
    }
}

async function newNote(name, journalID){
    var encName = await encrypt(name);
    var fillerText = await encrypt("");
	var encryptedjournalID = await encrypt(journalID);
    
    var pushedObject = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push({
        title:encName,
        text:fillerText,
		journal:encryptedjournalID
    });
    
    if(journalID != ""){
        await addNoteToJournal(pushedObject.key, name, journalID);
    }
    
    return [name, pushedObject.key];
}

async function setNote(data){
	data["text"] = await encrypt(data["text"]);
	data["title"] = await encrypt(data["title"]);
	return await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes').push(data).key;
}

async function updateNote(data, noteID){
	data["text"] = await encrypt(data["text"]);
	data["title"] = await encrypt(data["title"]);
	await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).set(data);
}

async function getSalt(){
    var salt = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/userdata/salt').once("value", ()=>{});
    
    return salt.val();
}

async function setSalt(salt){
    await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/userdata/salt').set(salt);
}



