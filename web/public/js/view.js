// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}


Vue.component("journal-overview", {
	props: ["journalname", "details"],
	methods: {
		noteurl: function(id){
			return "/edit/?t=note&id="+id;
		},
        journalurl: function(){
            return "/edit/?t=journal&id="+this.details[0];
        }
	},
	template: '<li class="journal-entry list pl0 outline pv2 ph2 mt3 mb3" style="width: 45%; margin-right: auto;"><span class="b"><a :href="journalurl()">{{ journalname }}</a></span><hr /><ul class="mt2 list pl0"><li class="pt2" v-for="note in details[1]"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></li>'
});

Vue.component("note-overview", {
	props: ["noteid", "note"],
	methods: {
		noteurl: function(){
			return "/edit/?t=note&id="+this.noteid;
		},
        getID: function(){
            return this.noteid;
        }
	},
	template: '<li class="mv2 pv1"><a :href="noteurl()" :id="getID()" class="note-entry">{{ note.title }}</a></li>'
});


var notesView = new Vue({
	el: "#notes",
	data: {
		notes:{},
        noteIDPointer:"",
        hasMore: true,
        lastID:""
	},
    computed:{
        display: function(){ return get("t") === "note"}
    },
    methods:{
        loadmore: function(){
            updateAllNotesListener(this.noteIDPointer, 5);
        }
    }
});



var journalsView = new Vue({
	el: "#journals",
	data: {
		journals:{},
        journalIDPointer:"",
        hasMore: true,
        lastID:""
	},
    computed:{
        display: function(){ return get("t") === "journal"}
    },
    methods:{
        loadmore: function(){
            updateAllJournalsListener(this.journalIDPointer, 5);
        }
    }
});


firebase.auth().onAuthStateChanged(function(u){
	if(u){
        if(get("t") === "note"){
            setLastNoteID();
            updateAllNotesListener("", 10);
        } else if (get("t") === "journal"){
            setLastJournalID();
            updateAllJournalsListener("", 10);
        }
	} else {
		window.location.href = "/login";
	}
});