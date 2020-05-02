Vue.component("journal-overview", {
	props: ["journalname", "notes"],
	methods: {
		noteurl: function(id){
			return "/edit/?id="+id;
		}
	},
	template: '<li class="journal-entry list pl0 outline pv2 ph2 mt3 mb3"><span class="b">{{ journalname }}</span><hr /><ul class="mt2 list pl0"><li v-for="note in notes"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></li>'
});

var journalsView = new Vue({
	el: "#journals",
	data: {
		journals:{},
        journalIDPointer:"",
        hasMore: true
	},
    methods:{
        loadmore: function(event){
            loadMoreJournals(this.journalIDPointer);
        }
    }
});

firebase.auth().onAuthStateChanged(function(u){
	if(u && getHash() !== null){
		updateAllJournalsListener();
	} else {
		window.location.href = "/login";
	}
});