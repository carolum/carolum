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

window.onhashchange = ()=> {
	nav.tabs = ["new", "dash", "settings"].indexOf(location.hash.slice(1)) === -1 ? "new" : location.hash.slice(1);
	location.hash = nav.tabs;
};


var newEntry = new Vue({
	el: "#new",
	computed: {
		display: function() { return nav.tabs === 'new'; }
	}
});

var dashboard = new Vue({
	el: "#dash",
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



firebase.auth().onAuthStateChanged(function(u){
	if(u){
		//pass for now
	} else {
		window.location.href = "/login";
	}
});