class Errors {

	constructor(){
		this.errors = {};
	}

	// get the errors for a given field
	get(field){
		if (this.errors[field]){
			return this.errors[field][0];
		}
	}

	record(errors){
		this.errors = errors;
	}	
};

new Vue({
	el: '#app', 
	data: {
		name: '',
		description: '',
		errors: new Errors()
	},
	methods: {
		onSubmit(){
			alert("Form was submitted");
			// at this point we would want to use axios to submit a post request:
			axios.post('/projects', this.$data)
			// this.$data is the same as: {
			// 	name: this.name,
			// 	description: this.description
			// });
			.then(response => alert('success'))
			.catch(error => {
				// original way before adding the Errors class:
				// if there is an error, add it to this.errors in the data object above.
				// this.errors = error.response.data
				// console.log(error.response.data);

				// after adding the Errors class:
				this.errors.record(error.response.data);
			})
		}
	}
});