Vue.component("journal-overview", {
	props: ["journalname", "details"],
	methods: {
		noteurl: function(id){
			return "/edit/?t=note&id="+id;
		},
        journalurl: function(){
            return "/edit/?t=journal&id="+this.details[0];
        }
	},
	template: '<div class="journal-entry outline pv2 ph2 mt2 mb2 mr3 mw5"><span class="b"><a :href="journalurl()">{{ journalname }}</a></span><hr /><ul class="mt2 list pl0"><li v-for="note in details[1]"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></div>'
});


Vue.component("note-overview", {
	props: ["noteid", "note"],
	computed: {
		noteurl: function(){
			return "/edit/?t=note&id="+this.noteid;
		}
	},
	template: '<li class="mv2"><a :href="noteurl" class="note-entry">{{ note.title }}</a></li>'
});

Vue.component("modal", {
    template: "#modal-template"
});


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
	} else {
		window.location.href = "/login";
	}
});