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
		},
        autoSaveTimeoutID:""
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
	methods: {
		update: function(){
			updateNote({title:this.content.title, text:this.content.text}, this.content.id_);
            console.log("save");
		},
		changeContent: function(key, val){
			this.content[key] = val;
		},
        startAutoSave: function(){
            if(this.autoSaveTimeoutID) clearTimeout(this.autoSaveTimeoutID);
            
            this.autoSaveTimeoutID = setTimeout(this.update, 1000);
            
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
		},
		hasMore: true
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
	methods: {
		update: function(){
			console.log("updaet");
		},
        loadmore: function(){
            console.log("no");
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