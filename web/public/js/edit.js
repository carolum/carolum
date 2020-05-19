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
        autoSaveTimeoutID:"",
        showLoader: false,
        showCheck: false
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
	methods: {
		update: async function(){
			await updateNote({title:this.content.title, text:this.content.text}, this.content.id_);
            
            this.toggleLoader();
            
            this.toggleCheck(1);
            
            console.log("saved");
		},
        toggleCheck: function(y){            
            this.showCheck = !this.showCheck;
            
            if(y) setTimeout(editEntry.toggleCheck, 1000, 0);
        },
        toggleLoader: function(){
            this.showLoader = !this.showLoader;
        },
		changeContent: function(key, val){
			this.content[key] = val;
		},
        startAutoSave: function(){
            console.log("started");
            if(this.autoSaveTimeoutID) clearTimeout(this.autoSaveTimeoutID);
            
            
            if(!this.showLoader) this.toggleLoader();
            
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