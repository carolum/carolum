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
	nav.tabs = location.hash.slice(1)
};



firebase.auth().onAuthStateChanged(function(u){
	if(u){
		//pass for now
	} else {
		window.location.href = "/login";
	}
});