var loaded = false; // this keeps the weird race error from coming up when rendering

var nav = new Vue({
	el: "#footer",
	data: {
        tabs: ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1),
        display: false
	},
	methods: {
		change: function(tab){
			location.hash = "#"+tab;
		}
	}
});

var newEntry = new Vue({
    el: "#new",
    data: {
        loaded: false
    },
	computed: {
		display: function() { return nav.tabs === 'new';}
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

            var nameAndID = await newNoteWithData(this.getData().title, dashboard.defaultJournalId, this.getData().text);
            window.location.href = "/edit/?t=note&id="+nameAndID[1];
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
            newJournalDefault: false
        },
        nojournals: false,
        nonotes: false,
        loaded: false,
        defaultJournalId: ""
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	},
    methods: {
        createJournal: async function(){
            await newJournal(this.newJournalData.newJournalName, this.newJournalData.newJournalDefault);
            
            this.nojournals = false;
            
            this.showJournalModal = false;

            this.newJournalData.newJournalName = "";
            
            this.newJournalData.newJournalDefault = false;
            
            setJournalSelectors(this);
            
            setTimeout(this.refreshJournalSelector, 250);
        },
        createNote: async function(){
            var nameAndID = await newNote(this.newNoteData.newNoteName, this.newNoteData.journalID);
            
            this.nonotes = false;
            
            this.showNoteModal = false;
            
            window.location.href = "/edit/?t=note&id="+nameAndID[1];
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
    data: {
        loaded: false
    },
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

var content = new Vue({
    el: "#content",
    data: {
        display: false
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

async function ready(){
    await updateRecentNotesListener();
    await updateRecentJournalsListener();
    await setJournalSelectors(dashboard);
}

firebase.auth().onAuthStateChanged(function(u){
    if(u){
        ready().then(()=>{
            dashboard.refreshJournalSelector();

            spinner.display = false;
            nav.display = true;

            newEntry.loaded = true;
            dashboard.loaded = true;
            settings.loaded = true;

            newEntry.$forceUpdate();
            dashboard.$forceUpdate();
            settings.$forceUpdate();
        })
    } else {
        window.location.href = "/login";
    }
});