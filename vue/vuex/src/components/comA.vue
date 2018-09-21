<template>
	<div class="coma">
		<ul class="goodslist">
			<li v-for="goods in goodslist">
				<strong>{{goods.name}}</strong>
				<span class="price">{{goods.price}}</span>
			</li>
		</ul>

		{{products}}
	</div>
</template>

<script>
	import {mapState} from 'vuex';

	export default {
		data(){
			return{
				goodslist:this.$store.state.home.goodslist
			}
		},
		created(){
			console.log(this);
		}
	}
</script>