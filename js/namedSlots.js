Vue.component('modal', {
	// slot only works if there's a single thing you want to slot in. Otherwise, use named slots.
	// For this modal example, we want a slot for the modal title, and the content.
	template: `
	<div class="modal is-active">
  		<div class="modal-background"></div>
  		<div class="modal-card">

    		<header class="modal-card-head">
      			<p class="modal-card-title">
      				<!-- This is a named slot -->
      				<slot name="header"></slot>
      			</p>
      			<button class="delete" aria-label="close"></button>
    		</header>

    		<section class="modal-card-body">
      			<!-- This is another named slot -->
      			<slot name="content">Here is default content. This will not show up at all if you declare this in the html, but if you DON'T, the default content will show up instead. </slot>
    		</section>

    		<footer class="modal-card-foot">
      			<slot name="footer"></slot>
    		</footer>
  		</div>
	</div>`.trim()
});

new Vue({
	el: "#app"
});