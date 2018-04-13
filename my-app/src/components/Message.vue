<!-- A file ending in .vue can be a self-contained component. It has its template tag, its script tag, and its style tag, all in the same file. This can be good for very simple resuable components. -->

<template>

	<div class="box is-info">
		<p>
			<slot></slot>
		</p>
	</div>


</template>

<script>

export default {

}

</script>
// make it green so we know if it's there. 
<style>

.box {
	background: green; 
	padding: 10px;
	border: 1px solid black;
	color: white;
	width: 50%;
	margin: 10px auto;
	text-align: center;
	border-radius: 4px;
}

</style>