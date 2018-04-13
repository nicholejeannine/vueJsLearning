<template>
  <div id="app">
    <!-- <message>Hello There {{count}}</message>
    <message>This is ANOTHER message!</message> -->
    <!-- <counter></counter> -->
    <ul>
      <!-- Issues might arise here if you are using a blade.php file - here, {{skill}} refers to a variable on our Vue instance; however, PHP will see this and attempt to render it as blade syntax. So we will get an undefined constant "skill" error. -->
      <!-- TO HAVE THE BLADE COMPILER IGNORE THIS AND TREAT IT AS JS, add the @ symbol before the {{}} -->
      <li for="skill in skills">@{{skill}}</li>
      <!-- Another option would be to use v-text: -->
      <li for="skill in skills" v-text="{{skill}}"></li>
  </div>
</template>

<script>
// import the Message component - this is only importing it, we haven't DONE anything with it yet.
// import Message from "./components/Message.vue";
import Counter from "./components/Counter.vue";
export default {
  name: 'app',
  // by including it in the "components" section, we are telling this app to load the named component. (if you comment this out, nothing happens)
  // components: {Message},
  components: {Counter},
  data () {
    
  }
}
</script>

<style>

</style>
