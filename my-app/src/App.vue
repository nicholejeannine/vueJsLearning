<template>
  <div id="app">
    <!-- <message>Hello There {{count}}</message>
    <message>This is ANOTHER message!</message> -->
    <counter></counter>
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
