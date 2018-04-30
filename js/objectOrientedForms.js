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

	clear(field) {
		delete this.errors[field];
	}	

	has(field){
		return this.errors.hasOwnProperty(field);
	}

	// check if there are ANY errors - if so we want to disable the submit button
	any(){
		// we're not using any helper libraries like lodash or underscore, so we can use the built-in javascript Object.keys, which returns an array, and check if the size > 0
		return Object.keys(this.errors).length > 0;
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
			// at this point we would want to use axios to submit a post request:
			axios.post('/projects', this.$data)
			// this.$data is the same as: {
			// 	name: this.name,
			// 	description: this.description
			// });
			.then(this.onSuccess) // why don't we have to pass the response?
			.catch(error => {
				// original way before adding the Errors class:
				// if there is an error, add it to this.errors in the data object above.
				// this.errors = error.response.data
				// console.log(error.response.data);

				// after adding the Errors class:
				this.errors.record(error.response.data);
			})
		},
		onSuccess(response) {
			alert("We would return response.data.message if this was returned from the backend. This method will now clear out the input fields.");
			// clear the form inputs
			this.name = '';
			this.description = '';

			// in the next episode we will change this method to use a form object so we can do something like form.reset() instead of manually clearing out each field.
		}
	}
});