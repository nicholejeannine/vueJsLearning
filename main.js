Vue.component('message', {
	// you must register the properties that the template will accept.
	props: ['title', 'body'],
	template: `<div>
	<div class="message">
		<h2 class="text-primary text-center message-header">{{title}}
		</h2>
		<div class="message-body">
			{{body}}
		</div>
	</div><hr/></div>`
});

new Vue({
	el: '#app', 
	// for a regular view instance, we can set data equal to an object:
	data: {
		// however you cannot do that for a component, because the component is not tied to a specific instance.
	}
});
