function setScrollListener(mod){
    $(window).scroll(function(){
       if($(window).scrollTop()+50 >= $(document).height() - $(window).height() && mod.hasMore){
           mod.loadmore();
       } 
    });
}


var notesView = new Vue({
	el: "#notes",
	data: {
		notes:{},
        noteIDPointer:"",
        hasMore: true,
        lastID:"",
        nonotes: false
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
        lastID: "",
        nojournals: false,
        showJournalModal: false,
        newJournalData:{
            newJournalName:"",
            newJournalDefault: false
        }
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
    methods:{
        loadmore: function(){
            updateAllJournalsListener(this.journalIDPointer, 5);
        },
        createJournal: async function(){
            await newJournal(this.newJournalData.newJournalName, this.newJournalData.newJournalDefault);
            
            this.nojournals = false;
            
            this.showJournalModal = false;

            this.newJournalData.newJournalName = "";
            
            this.newJournalData.newJournalDefault = false;
        },
        refreshJournalSelector: function(){
            return;
        }
    }
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
        if(get("t") === "note"){
            setLastNoteID();
            updateAllNotesListener("", 15);
            
            setScrollListener(notesView);
            
        } else if (get("t") === "journal"){
            setLastJournalID();
            updateAllJournalsListener("", 10);
            
            setScrollListener(journalsView);
            
        }
	} else {
		window.location.href = "/login";
	}
});