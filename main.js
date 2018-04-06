// it's best to use a hyphenated name so it doesn't interfere with any acutal Vue components.
Vue.component('task-item', {
	template: `<li><slot></slot></li>`,
	// we cannot add a data object because this template is not tied to a specific instance.
	// however we can set data equal to a function which RETURNS an object.
	data(){
		return {
			message: "Foobar"
		}
	}
});
// Got this in the console when running this:
// [Vue tip]: <task-item v-for="task in tasks">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.
// Added the :key="task.id" part on my own as a result of looking at this URL.
// For some reason, when rendering a view component, you can only return a single root node.
// So this will error out if you don't wrap the task items in a div or something.
Vue.component('task-list', {
	template: '<ul><task-item v-for="task in tasks" :key="task.id">{{task.description}}</task-item></ul>',
	data(){
		return {
			tasks: [
			{
				description: "Go to the store",
				completed: true
			},
			{
				description: "Finish screencast",
				completed: false
			},
			{
				description: "Work on resume",
				completed: false
			},
			{
				description: "Do another thing",
				completed: true
			},
			{
				description: "Make more tasks",
				completed: true
			}
		]
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
