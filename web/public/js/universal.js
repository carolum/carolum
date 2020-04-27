firebase.auth().onAuthStateChanged(function(u){
	if(u){
		//start listeners
		updateNotesListener();
		updateJournalsListener();
	} else {
		window.location.href = "/login";
	}
});