// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

var editEntry = new Vue({
	el: "#editNote",
	data: {
		content: {
			title:"",
			text:"",
			id_:get("id")
		}
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
	methods: {
		update: function(event){
			updateNote({title:this.content.title, text:this.content.text}, this.content.id_);
		},
		changeContent: function(key, val){
			this.content[key] = val;
		}
	}
});

var editJournal= new Vue({
	el: "#editJournal",
	data: {
		content: {
			title:"",
			text:"",
			id_:get("id")
		}
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
	methods: {
		update: function(event){
			//pass
		}
	}
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
        if(get("t") === "note") loadNoteToEdit(editEntry.content.id_);
        else if(get("t") === "journal") loadJournalToEdit(editJournal.content.id_)
	} else {
		window.location.href = "/login";
	}
});