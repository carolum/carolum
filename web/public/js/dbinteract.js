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

    if(ret.ids == null){
        mod.nonotes = true;
        mod.notes = {}
        mod.$forceUpdate();
        
        return;
    };
    
    var title = "",
        text = "",
        noteObject,
        noteData;
    
    let key, val;

    for([key, val] of Object.entries(ret.ids).reverse()){
        
        noteObject = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+key).once("value");
        
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
            var decJournalId = await decrypt(val.journal)
            var journalName = "";

            if(decJournalId != null && decJournalId != ""){
                var journalObj = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+decJournalId+"/name").once("value");
                journalName = await decrypt(journalObj.val());
            } else {
                journalName = "No Journal";
            }
            

			t[key]={
				text: decText,
                title: decTitle,
                journalId: decJournalId,
                journalName: journalName
			};
		}
		dashboard.notes=t;
        dashboard.$forceUpdate();
    });
}

async function updateAllJournalsListener(ptr, amt){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals').orderByKey();
    
    if(ptr == ""){
        ref.limitToLast(amt).on("value", async (snapshot)=>{
            await setJournals(journalsView, snapshot.val(), true, amt, true);
        });
        
    } else {
        ref.endAt(ptr).limitToLast(amt+1).on("value", async (snapshot)=>{
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


async function setJournalSelectors(mod){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid);

    var journalSelection = [];
    
    var defaultJournalObject = await ref.child("data/defaultJournal").once("value");

    var defaultJournalKey = defaultJournalObject.val();
    
    if(defaultJournalKey != null && defaultJournalKey != ""){
        var defaultJournal = await ref.child("journals/"+defaultJournalKey).once("value");
        defaultJournal = defaultJournal.val();
        
        if(defaultJournal != null){
            journalSelection.push({
                name: await decrypt(defaultJournal.name),
                id: defaultJournalKey
            });
        }
    }
    
    journalSelection.push({
        name: "No Journal",
        id: ""
    });
	
	var allJournals = await ref.child("journals").once("value");
    
    if(allJournals.val() != null){
        for(let [key, val] of Object.entries(allJournals.val())){
            if(key === defaultJournalKey) continue;

            journalSelection.push({
                name: await decrypt(val.name),
                id: key
            });
        }
    }
    mod.newNoteData.journalSelection = journalSelection;
    mod.newNoteData.journalID = journalSelection[0].id;
    
    mod.$forceUpdate();

    setTimeout(mod.refreshJournalSelector, 250);
}

async function setLastJournalID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value");
    
    if(lastIDSnapshot.val() == null){
        journalsView.lastID = "";
    } else {
        journalsView.lastID = Object.keys(lastIDSnapshot.val())[0];
    }
}


async function setLastNoteID(){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value");
    
    if(lastIDSnapshot.val() == null){
        notesView.lastID = "";
    } else {
        notesView.lastID = Object.keys(lastIDSnapshot.val())[0];
    }
}

async function setLastNoteIDInJournal(journalID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID+'/ids');
    
    var lastIDSnapshot = await ref.orderByKey().limitToFirst(1).once("value");
    
    if(lastIDSnapshot.val() == null) return;
    
    var lastID = Object.keys(lastIDSnapshot.val())[0]
    
    editJournal.lastID = lastID;
}



async function setDefaultJournalID(ID){
    var ref = firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/data/');
    ref.child("defaultJournal").set(ID);    
}




async function deleteNote(noteID){
    var ref = firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/notes/"+noteID);
    
    var noteData = await ref.once("value");
    
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
    var ref = firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/journals/"+journalID);
    
    var noteChildrenObj = await ref.child("ids").once("value");
    
    var noteChildrenIDs = noteChildrenObj.val();
    
    for(var noteID in noteChildrenIDs){
        var childRef = firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/notes/"+noteID).child("journal");
        
        var noJournal = await encrypt("");
        
        await childRef.set(noJournal);
    };
    
    ref.remove();
    
    await setDefaultJournalID("");
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
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).on("value", async (snapshot)=>{
           await setNotesFromJournal(editJournal, snapshot.val(), true, 5);
        });
        
    } else {
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/journals/'+journalID).on("value", async (snapshot)=>{
            var ret = snapshot.val();

            delete ret[ptr];
            
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
        await setDefaultJournalID(pushedObject.key);
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
    data["journal"] = await encrypt(data["journal"]);
	await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/notes/'+noteID).set(data);
}

async function getSalt(){
    var salt = await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/userdata/salt').once("value");
    
    return salt.val();
}

async function setSalt(salt){
    await firebase.database().ref('/users/'+firebase.auth().currentUser.uid+'/userdata/salt').set(salt);
}



