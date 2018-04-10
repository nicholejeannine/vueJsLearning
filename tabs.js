Vue.component('tabs', {

	template: `
	<div>
		<div class="tabs">
 	 		<ul>
    			<li v-for="tab in tabs">
    				<a href="#">{{tab.name}}</a>
    			</li>
  			</ul>
		</div>
		<div class="tabs-details">
	    	<!-- slot tag says "take anything between the tags and slot it in right here.-->
			<slot></slot>
		</div>
	</div>`.trim(),
	// it's annoying to type this.$children every time we want to reference the tabs component, so we can set a variable:
	data(){
		// remember in a component, data needs to be set to a function that returns an object.
		return {
			tabs: []
		}
	},
	created(){
		// we have to be explicit about the data that is returned, so declare that within the data function.
		this.tabs = this.$children;
	},
	mounted(){
		console.log(this.tabs);
	}
});

Vue.component('tab', {

	template: `<div><slot></slot></div>`,
	// you must be explicit about the properties you pass in.
	// you can require that properties are defined
	// if you don't define the properties, they won't be available under the $vm0.$children.
	props: {
		name: {required: true}
	}
});

new Vue({
	el: '#app', 
	// for a regular view instance, we can set data equal to an object:
	data: {
		// however you cannot do that for a component, because the component is not tied to a specific instance.
	}
});