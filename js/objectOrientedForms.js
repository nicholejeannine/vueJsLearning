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
		if (field){
			delete this.errors[field];
		}
		else {
			this.errors = {}
		}
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


class Form {

	constructor(data){
		this.originalData = data;
		// this.data = data; // we could do it this way but then in order to access each field, we'd have to do this.data.name. That's annoying.
		// instead, let's loop through the data array and assign each field as a property on the form itself so we can just do this.name, this.description
		for (let field in data){
			this[field] = data[field];
		}

		this.errors = new Errors();
	}

	data(){
		// this.name and this.description - but we want this to be dynamic. And we can't just fetch ALL the properties, because we have errors as well as other things we might assign. (?)
		// Jeffrey Way's solution:
		let data = Object.assign({}, this); // this clones the object. It would have {name, description, originalData, errors}
		delete data.originalData;
		delete data.errors;
		return data;
	}

	reset() {

		for (let field in this.originalData){
			this[field] = '';
		}
	}

	submit(requestType, url){
		axios[requestType](url, this.data())
		// when this.onFail is called, the "this" is rebound and will no longer refer to our form instance. Because, javascript. So, we can bind the "this" back to the form like so:

		.then(this.onSuccess.bind(this))
		// why don't we have to pass the error into the onFail call??
		.catch(this.onFail.bind(this));
	}

	onSuccess(response){
		alert(reesponse, " is the response after onSubmit");
		this.reset(); // this works, we can test it by putting it in the onFail method - the onSuccess method will not work without the Laravel backend.
		this.errors.clear();
	}

	onFail(error){
		if (error.response && error.response.data){
			this.errors.record(error.response.data)
		}
	}
}



new Vue({
	el: '#app', 
	data: {
		form: new Form({
			name: '',
			description: ''
		})
	},
	methods: {
		onSubmit(){
			this.form.submit('post', '/projects');
		},
		onSuccess(response) {
			form.reset();
		}
	}
});