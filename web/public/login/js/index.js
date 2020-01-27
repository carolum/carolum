new Vue({
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
				})
		}
	}
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
		window.location.href = '/';
	}
})