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

var journalsView = new Vue({
	el: "#journals",
	data: {
		journals:{},
        journalIDPointer:"",
        hasMore: true,
        lastID:""
	},
    methods:{
        loadmore: function(){
            updateAllJournalsListener(this.journalIDPointer, 5);
        }
    }
});

firebase.auth().onAuthStateChanged(function(u){
	if(u){
        setLastID();
		updateAllJournalsListener("", 5);
	} else {
		window.location.href = "/login";
	}
});