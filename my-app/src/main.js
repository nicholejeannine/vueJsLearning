import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
  	skills: []
  },
  // here's how you might handle an ajax request with the Axios library:
  mounted(){
  	// maybe we are fetching a list of skills from the server. It would default to an empty array.
  	axios.get('/skills').then(this.skills = response.data); // data will be returned in the response.data key
  }
});



