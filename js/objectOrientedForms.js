new Vue({
	el: '#app', 
	data: {
		name: '',
		description: ''
	},
	methods: {
		onSubmit(){

			// alert("Form was submitted");
			// at this point we would want to use axios to submit a post request:
			axios.post('/projects', {
				name: this.name,
				description: this.description
			});
		}
	}
});