var editEntry = new Vue({
	el: "#edit",
	data: {
		content: {
			titlePlaceholder: (new Date()).getMonth() + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear(),
			textPlaceholder:'Today...',
			title:"",
			text:""
		}
	},
	methods: {
		getData: function(){
			return {
				title: this.content["title"],
				text: this.content["text"]
			}
		},
		update: function(event){
			setNote(this.getData());
		},
		changeContent: function(key, val){
			this.content[key] = val;
		}
	}
});

console.log(document.location.href)