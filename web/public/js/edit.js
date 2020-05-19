// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}


Vue.component("note-overview", {
	props: ["journalname", "details"],
	methods: {
		noteurl: function(id){
			return "/edit/?t=note&id="+id;
		},
        journalurl: function(){
            return "/edit/?t=journal&id="+this.details[0];
        }
	},
	template: '<li class="journal-entry list pl0 outline pv2 ph2 mt3 mb3" style="width: 45%; margin-right: auto;"><span class="b"><a :href="journalurl()">{{ journalname }}</a></span><hr /><ul class="mt2 list pl0"><li v-for="note in details[1]"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></li>'
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
        content: {
			title:"",
			text:"",
			id_:get("id")
		},
		hasMore: true,
        notes:{}
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