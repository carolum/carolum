var notesView = new Vue({
	el: "#notes",
	data: {
		notes:{},
        noteIDPointer:"",
        hasMore: true,
        lastID:""
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
    methods:{
        loadmore: function(){
            updateAllNotesListener(this.noteIDPointer, 5);
        }
    }
});



var journalsView = new Vue({
	el: "#journals",
	data: {
		journals:{},
        journalIDPointer:"",
        hasMore: true,
        lastID:""
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
    methods:{
        loadmore: function(){
            updateAllJournalsListener(this.journalIDPointer, 5);
        }
    }
});


firebase.auth().onAuthStateChanged(function(u){
	if(u){
        if(get("t") === "note"){
            setLastNoteID();
            updateAllNotesListener("", 10);
        } else if (get("t") === "journal"){
            setLastJournalID();
            updateAllJournalsListener("", 10);
        }
	} else {
		window.location.href = "/login";
	}
});