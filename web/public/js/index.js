Vue.component("journal-overview", {
	props: ["journalname", "notes"],
	methods: {
		noteurl: function(id){
			return "/edit/?id="+id;
		}
	},
	template: '<li class="journal-entry list pl0 outline pv2 ph2 mt2 mb2 mr3 mw5"><span class="b">{{ journalname }}</span><hr /><ul class="mt2 list pl0"><li v-for="note in notes"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></li>'
});


Vue.component("note-overview", {
	props: ["noteid", "note"],
	computed: {
		noteurl: function(){
			return "/edit/?id="+this.noteid;
		}
	},
	template: '<li class="mv2" ><a :href="noteurl" class="note-entry">{{ note.title }} </a></li>'
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
		update: async function(event){
			var id = await setNote(this.getData());
			window.location.href = "/edit/?id="+id;
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
		notes: {}
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	},
	methods: {
		change: function(event){
			location.hash = "#"+event;
		},
        forceRefresh: function(){
            this.$forceUpdate();
        }
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
	if(u && getHash() !== null){
		// start listeners
		updateRecentNotesListener();
		updateRecentJournalsListener();
	} else {
		window.location.href = "/login";
	}
});