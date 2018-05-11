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
		// cleaner way to assign properties (vs. cloning the data object as before)
		let data = {};

		// loop through the original data, which is passed in the Vue instance data object (name and descritpion, in this case).
		// filter through name and description; for each we are essentially saying data.name = this.name, data.description = this.description
		for (let property in this.originalData){

			data[property] = this[property];
		}
		return data;
	
	}

	reset() {
		// clear fields
		for (let field in this.originalData){
			this[field] = '';
		}
		// clear errors
		this.errors.clear();
	}


	// form.submit('POST', '/endpoint' => returns a promise)
	submit(requestType, url){
		return new Promise((resolve, reject) => {
			// the axios call returns a promise - that is what allows us to do .then and .catch - above we are doing it manually.
			axios[requestType](url, this.data())
			.then(response => {
				this.onSuccess(response.data);
				// when we call resolve, the onSubmit "then" method will be triggered.
				resolve(response.data); 
			})
			.catch(error => {
				this.onFail(error.response.data);
				reject(error.response.data);
			})
			

		});

	}

	onSuccess(data){
		alert(data.message, " is the response after onSubmit");
		this.reset(); // this works, we can test it by putting it in the onFail method - the onSuccess method will not work without the Laravel backend.
	}

	onFail(errors){
		this.errors.record(errors);
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
			this.form.submit('post', '/projects')
			// this wouldn't work without creating the promise in the Form.onSuccess method above - since it returns a promise, calling "resolve" will trigger this "then" method.
			.then(data => console.log(data))
			.catch(error => console.log(error));
		},
		onSuccess(response) {
			form.reset();
		}
	}
});