var loaded = false;


var editNote = new Vue({
	el: "#editNote",
	data: {
        loaded: false,
		content: {
			title:"",
			text:"",
            textPlaceholder:"Today...",
            id_:get("id"),
            journalId: ""
		},
        autoSaveTimeoutID:"",
        showLoader: false,
        showCheck: false
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
	methods: {
		update: async function(){
			await updateNote({title:this.content.title, text:this.content.text, journal:this.content.journalId}, this.content.id_);
            
            this.toggleLoader();
            
            this.toggleCheck(1);
		},
        toggleCheck: function(y){            
            this.showCheck = !this.showCheck;
            
            if(y) setTimeout(editNote.toggleCheck, 1000, 0);
        },
        toggleLoader: function(){
            this.showLoader = !this.showLoader;
        },
        startAutoSave: function(){
            if(this.autoSaveTimeoutID) clearTimeout(this.autoSaveTimeoutID);
            
            if(!this.showLoader) this.toggleLoader();
            
            this.autoSaveTimeoutID = setTimeout(this.update, 1000);
        }
	}
});



var editJournal= new Vue({
	el: "#editJournal",
	data: {
        loaded: false,
        title: "",
        id_: get("id"),
        notes:{},
        hasMore: false,
        journalIDPointer: "",
        lastID:"",
        showNewNoteModal: false,
        newNoteName:"",
        nonotes: false
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
	methods: {
		createNote: async function(){
			var nameAndID = await newNote(this.newNoteName, this.id_);
            
            this.nonotes = true;
            
            window.location.href = "/edit/?t=note&id="+nameAndID[1];
		},
        loadmore: function(){
            console.log("no");
        }
	}
});


async function ready(){
    if(get("t") === "note"){
        await loadNoteToEdit(editNote.content.id_);
    }
    else if(get("t") === "journal"){
        await setLastNoteIDInJournal(get("id")).then();
        await loadJournalToEdit(editJournal.id_, "", 5);
    }
}

firebase.auth().onAuthStateChanged(function(u){
	if(u){
        ready().then(()=>{
           spinner.display = false;
           
           editNote.loaded = true;
           editJournal.loaded = true;

           editNote.$forceUpdate();
           editJournal.$forceUpdate();
        });
	} else {
		window.location.href = "/login";
	}
});