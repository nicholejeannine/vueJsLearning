// it's best to use a hyphenated name so it doesn't interfere with any acutal Vue components.
Vue.component('task-item', {
	template: '<li><slot></slot></li>'
	// we cannot add a data object because this template is not tied to a specific instance.
	// however we can set data equal to a function which RETURNS an object.
	data(){
		return {
			message: "Foobar";
		}
	}
});

new Vue({
	el: '#app'
	// for a regular view instance, we can set data equal to an object:
	data: {
		// however you cannot do that for a component, because the component is not tied to a specific instance.
	}
});
