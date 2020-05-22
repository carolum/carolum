// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}


Vue.component("note-overview", {
	props: ["noteid", "note"],
	computed: {
		noteurl: function(){
			return "/edit/?t=note&id="+this.noteid;
		}
	},
	template: '<li class="mv2"><a :href="noteurl" class="note-entry">{{ note.title }}</a></li>'
});



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
            if(this.autoSaveTimeoutID) clearTimeout(this.autoSaveTimeoutID);
            
            if(!this.showLoader) this.toggleLoader();
            
            this.autoSaveTimeoutID = setTimeout(this.update, 1000);
        }
	}
});



var editJournal= new Vue({
	el: "#editJournal",
	data: {
        title: "",
        id_: get("id"),
        notes:{},
        hasMore: true,
        journalIDPointer: "",
        lastID:""
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
        else if(get("t") === "journal"){
            setLastNoteIDInJournal(get("id"));
            loadJournalToEdit(editJournal.id_, "", 5);
        }
	} else {
		window.location.href = "/login";
	}
});