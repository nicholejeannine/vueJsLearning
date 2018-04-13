<template>
	<div>
		<!-- Hot module replacement means I can use live reload, and on the fly I can make changes to the template, the styling, etc, but this count variable retains its state. IT DOES NOT RESET EVERY TIME. Pretty cool.-->
		<h2> The count: {{count}} </h2>

		<p>
			<button @click="count +=1">Increment Count</button>
		</p>
	</div>
</template>

<script>

export default{

	data(){
		return {
			count: 0
		}
	}
}

</script>

<style>

</style>