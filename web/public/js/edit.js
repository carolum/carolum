var editNote = new Vue({
	el: "#editNote",
	data: {
		content: {
			title:"",
			text:"",
			id_:get("id")
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
			await updateNote({title:this.content.title, text:this.content.text}, this.content.id_);
            
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
        title: "",
        id_: get("id"),
        notes:{},
        hasMore: false,
        journalIDPointer: "",
        lastID:"",
        showNewNoteModal: false,
        error: "",
        newNoteName:""
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
	methods: {
		createNote: async function(){
			var nameAndID = await newNote(this.newNoteName, this.id_);
            
            window.location.href = "/edit/?t=note&id="+nameAndID[1];
		},
        loadmore: function(){
            console.log("no");
        }
	}
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
        if(get("t") === "note"){
            loadNoteToEdit(editNote.content.id_);
        }
        else if(get("t") === "journal"){
            setLastNoteIDInJournal(get("id"));
            loadJournalToEdit(editJournal.id_, "", 5);
        }
	} else {
		window.location.href = "/login";
	}
});