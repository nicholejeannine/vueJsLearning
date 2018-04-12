Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			// this.$emit takes a second additional argument, which is any data (a singular piece of data, OR an object) you want to pass through - for instance, maybe you have a v-model you want to pass through, you could send the name of the model. E.g., this.coupon (if v-model was set to coupon)
			this.$emit('applied'); // this matches the v-on value. v-on:applied="onCouponApplied" .  e.g., when the 'applied' method is triggered on the Vue component, emit the event "onCouponApplied", in effect notifying the root element (and triggering the named event).
		}
	}
});

new Vue({
	el: '#app',
	data: {
		couponApplied: false
	}
	// on "applied" event, notify THE ROOT ELEMENT and run the metbod (ON THE ROOT ELEMENT) called "onCouponApplied"
	methods: {
		onCouponApplied(){
			console.log("It was applied");
			this.couponApplied = true;
		}
	}
});