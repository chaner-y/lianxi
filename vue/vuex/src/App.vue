<template>
	<div class="container">
		<com-a></com-a>
		<com-b></com-b>
	</div>
</template>

<script>
	import comA from './components/comA.vue';
	import comB from './components/comB.vue';

	export default {
		components:{
			comA,
			comB
		}
	}
</script>

<style>
	ul{list-style: none;padding:0;margin:0;}
	.goodslist li{margin:10px;padding:10px;border:1px solid #ddd;}
	.coma li{display: inline-block;}
	.price{color:#f00;}
	.price::before{
		content:'￥';
	}
</style>