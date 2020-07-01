var nav = new Vue({
	el: "#nav",
	data: {
		tabs: ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1)
	},
	methods: {
		change: function(tab){
			location.hash = "#"+tab;
		}
	}
});

var newEntry = new Vue({
	el: "#new",
	computed: {
		display: function() { return nav.tabs === 'new'; },
	},
	data: {
		content: {
			titlePlaceholder: (new Date()).getMonth()+1 + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear(),
			textPlaceholder:'Today...',
			title:"",
			text:""
		}
	},
	methods: {
		getData: function(){
			return {
				title: this.content.title != "" ? this.content.title : this.content.titlePlaceholder,
				text: this.content.text
			};
		},
		update: async function(){
            if(this.getData().text === "") return;
			var id = await setNote(this.getData());
			window.location.href = "/edit/?t=note&id="+id;
		}
	}
});

var dashboard = new Vue({
	el: "#dash",
	data: {
		journals: {},
		notes: {},
        showJournalModal: false,
        showNoteModal: false,
        newNoteData:{
            journalSelection: [],
            journalID:"",
            newNoteName:""
        },
        newJournalData:{
            newJournalName:"",
            newJournalDefault:""
        },
        nojournals: false,
        nonotes: false
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	},
    methods: {
        createJournal: function(){
            newJournal(this.newJournalData.newJournalName, this.newJournalData.newJournalDefault);
            
            this.nonotes = true;
            
            this.showJournalModal = false;
            
            setJournalSelectors();
            setTimeout(this.refreshJournalSelector, 250)
        },
        createNote: async function(){
            var nameAndID = await newNote(this.newNoteData.newNoteName, this.newNoteData.journalID, this.nonotes);
            
            window.location.href = "/edit/?t=note&id="+nameAndID[1];
            
            this.showNoteModal = false;
        },
        refreshJournalSelector: function(){
            $("#dash-journal-selector").select2({
                dropdownParent: $('#noteModal'),
                width:"resolve"
            });
        }
    }
});

var settings = new Vue({
	el: "#settings",
	computed: {
		display: function() { return nav.tabs === 'settings'; }
	},
    methods: {
        logout: async function(){
            await clearRSAKeys();
            firebase.auth().signOut();
        }
    }
});

var push = new Vue({
	el: "#push",
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	}
});

window.onhashchange = () => {
	nav.tabs = ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1);
	location.hash = nav.tabs;
};

firebase.auth().onAuthStateChanged(function(u){
    if(u){
        // start listeners
        updateRecentNotesListener();
        updateRecentJournalsListener();

        setJournalSelectors();

        $(document).ready(function(){
            dashboard.refreshJournalSelector();
        });
    } else {
        window.location.href = "/login";
    }
});