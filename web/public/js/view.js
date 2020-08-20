var loaded = false;

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
        loaded: false,
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
        loaded: false,
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


async function ready(){
    if(get("t") === "note"){
        await setLastNoteID();
        await updateAllNotesListener("", 15);
        
        setScrollListener(notesView);
        
    } else if (get("t") === "journal"){
        await setLastJournalID();
        await updateAllJournalsListener("", 10);
        
        setScrollListener(journalsView);
    }
}


firebase.auth().onAuthStateChanged(function(u){
	if(u){
        ready().then(()=>{
            spinner.display = false;

            notesView.loaded = true;
            journalsView.loaded = true;

            notesView.$forceUpdate();
            journalsView.$forceUpdate();
        });
	} else {
		window.location.href = "/login";
	}
});