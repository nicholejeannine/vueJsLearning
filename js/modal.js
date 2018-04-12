Vue.component('my-modal', {
  props: ['body'],
  template: `
  <div style="display: block;" class="modal fade show" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">

        <!-- THIS WOULD NOT WORK:
        <button type="button" @click="showModal=false" class="btn btn-secondary" data-dismiss="modal">Close</button>

        It would result in this error:
        [Vue warn]: Property or method "showModal" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
        BECAUSE OF THE SCOPE. showModal method doesn't exist on the modal component, it has its own scope.
        What we need to do is notify the root instance that the display or the active status of the modal has changed;
        then the root instance can say "oh, the modal has been closed, cool, we can change that property then."
        
        HERE IS THE CORRECT WAY: We $emit a custom event, which will be registered on the component (in the index.html file).
        -->
        <button type="button" @click="$emit('close')" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>`.trim()
});

new Vue({
  el: '#app', 
  // for a regular view instance, we can set data equal to an object:
  data: {
    showModal: false
    // however you cannot do that for a component, because the component is not tied to a specific instance.
  }
});