// it's best to use a hyphenated name so it doesn't interfere with any acutal Vue components.
Vue.component('task-item', {
	template: '<li>Foobar</li>'
});

new Vue({
	el: '#app'
});

// var app = new Vue({
// 	el: "#app",
// 	data: {
// 		tasks: [
// 			{
// 				description: "Go to the store",
// 				completed: true
// 			},
// 			{
// 				description: "Finish screencast",
// 				completed: false
// 			},
// 			{
// 				description: "Work on resume",
// 				completed: false
// 			},
// 			{
// 				description: "Do another thing",
// 				completed: true
// 			},
// 			{
// 				description: "Make more tasks",
// 				completed: true
// 			}
// 		],
// 		message: "Hello World!"
// 	},
// 	// the computed object lets you compute properties before they are displayed on the page.
// 	computed: {
// 		incompleteTasks(){
// 			return this.tasks.filter(task => !task.completed);
// 		}
// 	},

// 	// any custom methods we write should be nested within the "methods" object:
// 	methods: {
		
// 	},

// });