// from SO
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

var editEntry = new Vue({
	el: "#edit",
	data: {
		content: {
			title:"",
			text:"",
			id_:get("id")
		}
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

firebase.auth().onAuthStateChanged(function(u){
	if(u && getHash() !== null){
		try{
			loadNoteToEdit(editEntry.content.id_);
		} catch (e){
			editEntry.content.title = e.message;
			editEntry.content.text = e.message;
		}
	} else {
		window.location.href = "/login";
	}
});