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
		},
		changeContent: function(key, val){
			this.content[key] = val;
		}
	}
});

var dashboard = new Vue({
	el: "#dash",
	data: {
		journals: {},
		notes: {},
        showJournalModal: false,
        showNoteModal: false
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	}
});

var settings = new Vue({
	el: "#settings",
	computed: {
		display: function() { return nav.tabs === 'settings'; }
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
        
        $(document).ready(function(){
            $("#dash-journal-selector").select2({
                dropdownParent: $('#noteModal'),
                placeholder: "Journal selection",
                width:"resolve"
            });
        })
	} else {
		window.location.href = "/login";
	}
});