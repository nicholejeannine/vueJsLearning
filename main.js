Vue.component('message', {
	// you must register the properties that the template will accept.
	props: ['title', 'body'],
	// v-show: SHOW this component if the thing returns true. (There's also a v-hide directive)
	template: `
  		<div class="col-sm-6" v-show="isVisible">
    		<div class="card">
      			<div class="card-body">
        			<h3 class="text-primary text-center card-title">{{title}}<button @click="hideCard" type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></h3>
        			<p class="card-text">{{body}}</p>
      			</div>
    		</div>
  		</div>`.trim(),

  		// remember that data, when used inside a view component, must be a function which returns an object.
  		data(){
  			return {
  				isVisible: true
  			}
  		},
  		methods: {
  			// this keyword refers to this specific instance, NOT everything on the page.
  			hideCard() {
  				// this is so basic that instead of this, you could use an onclick handler on the button: @click="isVisible = false"
  				this.isVisible = false;
  			}
  		}
});

new Vue({
	el: '#app', 
	// for a regular view instance, we can set data equal to an object:
	data: {
		// however you cannot do that for a component, because the component is not tied to a specific instance.
	}
});
