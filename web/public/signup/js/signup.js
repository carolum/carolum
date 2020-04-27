var signup = new Vue({
	el: "#signup",
	data: {
		e: "",
		p:"",
		p2:"",
		nomatch: false
	},
	methods:{
		validate: function() {
			this.nomatch = this.p2 !== "" ? this.p !== this.p2 : false;	
		},
		signup: function(){
			if (!this.nomatch){
				var error = "";
				
				firebase.auth().createUserWithEmailAndPassword(this.e, this.p)
					.catch(
					function(error){
						var errorCode = error.code;
						
						switch(errorCode){
							case "auth/weak-password":
								error = "Password is too weak!";
								break;
								
							case "auth/invalid-email":
								error = "Invalid email!";
								break;
								
							case "auth/email-already-in-use":
								error = "Email already in use!";
								break;
								
							default:
								error = "Unknown error. Please report this error."
								break;
								
						}

						$("#error").text(error);
					});
				
				hash(this.p, "hashsaltthing")
					.then((h) => {
						window.localStorage.setItem("carolum-pwhash", h.hashHex);
					});
				}
		}
	}
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
		window.location.href = '/';
	}
})