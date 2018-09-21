<template>
	<div class="comb">
		<ul class="goodslist">
			<li v-for="goods in goodslist">
				<strong>{{goods.name}}</strong>
				<span class="price">{{goods.price}}</span>
			</li>
		</ul>
		<button @click="addPrice">增加价格</button>
		<button @click="minusPrice">3s后减少价格</button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				goodslist:this.$store.getters.saleGoodslist
			}
		},
		methods:{
			addPrice(){
				this.$store.commit('changePrice',5);
			},
			minusPrice(){
				this.$store.dispatch('minusPrice',-3);
			}
		}
	}
</script>