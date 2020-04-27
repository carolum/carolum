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
	props: ["journalname", "notes"],
	methods: {
		noteurl: function(id){
			return "/edit?id="+id;
		}
	},
	template: '<li class="journalEntry">{{ journalname }}<ul class="mt2"><li v-for="note in notes"><a :href="noteurl(note.id_)">{{ note.title}}</a></li></ul></li>'
});


var nav = new Vue({
	el: "#nav",
	data: {
		tabs: ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1);
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
			};
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
		journals: {},
		notes: {}
	},
	computed: {
		display: function() { return nav.tabs === 'dash'; }
	},
	methods: {
		change: function(event){
			location.hash = "#"+event;
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