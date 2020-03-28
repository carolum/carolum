Vue.component("note-overview", {
	props: ["notename", "noteid"],
	computed: {
		noteurl: function(){
			return "/edit/?id="+this.noteid;
		}
	},
	template: '<li>{{ notename }} - <a :href="noteurl">{{ noteid }}</a></li>'
});

Vue.component("journal-overview", {
	props: ["journalname", "noteids"],
	template: '<li>{{ journalname }}</li>'
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
			titlePlaceholder: (new Date()).getMonth() + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear(),
			textPlaceholder:'Today...',
			title:"",
			text:""
		}
	},
	methods: {
		getData: function(){
			return {
				title: this.content["title"],
				text: this.content["text"]
			}
		},
		update: function(event){
			setNote(this.getData());
		},
		changeContent: function(key, val){
			this.content[key] = val;
		}
	}
});

var dashboard = new Vue({
	el: "#dash",
	data: {
		journalNames: getFolders()[0],
		journals: getFolders()[1],
		noteNames: getNotes()[0],
		notes: getNotes()[1],
		recentLimit: 10
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	},
	methods: {
		change: function(event){
			location.hash = "#"+event;
		},
		getRecentJournals: function (event) {
			let ret = {};
			
			this.journalNames.slice(0,this.recentLimit).forEach((e)=>{
				ret[e] = this.journals[e];
			});
			
			return ret;
		},
		getRecentNotes: function (event) {
			let ret = {};
			
			this.noteNames.slice(0,this.recentLimit).forEach((e)=>{
				ret[e] = this.notes[e];
			});
			
			return ret;
		}
	}
});

var settings = new Vue({
	el: "#settings",
	computed: {
		display: function() { return nav.tabs === 'settings'; }
	}
});

window.onhashchange = () => {
	nav.tabs = ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1);
	location.hash = nav.tabs;
};

firebase.auth().onAuthStateChanged(function(u){
	if(u){
		//pass for now
	} else {
		window.location.href = "/login";
	}
});