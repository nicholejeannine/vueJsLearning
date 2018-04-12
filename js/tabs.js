Vue.component('tabs', {
	// in our template we will create a custom function to set the is-active tab on the class. We will call "selectTab" and pass the tab as an argument.
	// special functions like @click take an optional second argument, which is the event ($event)
	template: `
	<div>
		<div class="tabs">
 	 		<ul>
    			<li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
    				<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
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
	methods: {
		selectTab(selectedTab){

			/* // this function creates this error:
			//[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "selected"
			this.tabs.forEach(tab => {
				tab.selected = (tab.name == selectedTab.name)
			});
			
			IN GENERAL, consider the properties that we set in a component to be immutable.
			If we do need mutability, use a computed property or "a piece of data"
			*/
			// What we do here to resolve the above problem: We set a piece of data on each tab (the property isActive, which we default to false. Then this method can go through and set the isActive piece of data, instead of setting properties).
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			});
		}
	},
	mounted(){
		console.log(this.tabs);
	}
});

Vue.component('tab', {

	template: `<div v-show="isActive"><slot></slot></div>`,
	// you must be explicit about the properties you pass in.
	// if you don't define the properties, they won't be available under the $vm0.$children.
	// can require props, set defaults
	props: {
		name: {required: true},
		selected: {default: false } // if you don't have a selected property set, make the default false.
	},
	data(){
		return {
			isActive: false
		}
	},
	// computed property for the herf tag
	computed: {
		href() {
			// changes it to lowercase and replaces spaces globally with a dash.
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},
	mounted() {
		this.isActive = this.selected;
	}
});

new Vue({
	el: '#app', 
	// for a regular view instance, we can set data equal to an object:
	data: {
		// however you cannot do that for a component, because the component is not tied to a specific instance.
	}
});