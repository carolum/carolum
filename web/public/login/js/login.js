var login = new Vue({
	el: "#signup",
	data: {
		e: "",
		p:"",
		p2:"",
		b:"",
	},
	methods:{
		signup: function(){
			firebase.auth().signInWithEmailAndPassword(this.e, this.p)
				.catch(
				function(error){
					$("#error").text("No matching account found");
					bad = true;
				});
			
			hash(this.p, "hashsaltthing")
			.then((h) => {
				window.localStorage.setItem("carolum-pwhash", h.hashHex);
			});
		}
	}
});

firebase.auth().onAuthStateChanged(function(u){
	if(u && getHash() !== null){
		window.location.href = '/';
	}
});