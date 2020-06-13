// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

Vue.component("journal-detailed", {
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

Vue.component("journal-overview", {
	props: ["journalname", "details"],
	methods: {
		noteurl: function(id){
			return "/edit/?t=note&id="+id;
		},
        journalurl: function(){
            return "/edit/?t=journal&id="+this.getID();
        },
        getID: function(){
            return this.details[0];
        }
	},
	template: '<div class="journal-entry outline pv2 ph2 mt2 mb2 mr3 mw5" :id="getID()"><span class="b"><a :href="journalurl()">{{ journalname }}</a></span><hr /><ul class="mt2 list pl0"><li class="pt2" v-for="note in details[1]"><a :href="noteurl(note.id_)">{{ note.title }}</a></li></ul></div>'
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
	template: '<li class="mv2 pv1 list pl0" style="width: 45%; margin-right: auto;"><a :href="noteurl()" :id="getID()" class="note-entry"><div class="outline ph3 mt0 pv3"><p class="b bb w-100 ma0 pb1">{{ note.title }}</p><p class="mh0 mb0 mt2">{{ note.text }}</p></div></a></li>'
});

Vue.component("modal", {
    template: "#modal-template"
});




