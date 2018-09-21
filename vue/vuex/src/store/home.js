export default {
	state:{
		goodslist:[
			{name: '鼠标', price: 20},
            {name: '键盘', price: 40},
            {name: '耳机', price: 60},
            {name: '显示屏', price: 80}
		]
	},

	// getters
	// 类似与组件中的computed
	// 调用方式：$store.getters.xxx
	getters:{
		saleGoodslist(state){
			return state.goodslist.map(item=>{
				return {
					name:item.name,
					price:item.price/2
				};
			});
		}
	},

	// mutations
	// 类似于组件中的methods
	// 调用方式：$store.commit(type)
	mutations:{
		// 这里的方法，一般用于同步操作
		changePrice(state,payload){
			state.goodslist.forEach(item=>{
				item.price +=payload;
			})
		}
	},

	// actions
	// 类似与mutations
	// 调用方式：$store.dispatch()
	actions:{
		// 这里的方法一般用于异步操作
		minusPrice(context,payload){
			// context相当于精简版的$store，有着类似的几个接口：
			// commit(),dispatch(),getters,state
			console.log('context',context);
			// context.state
			// context.commit
			// ..


			// 此处花费10s的ajax操作
			setTimeout(()=>{
				// 在actions中通过触发mutation来简介修改state
				context.commit('changePrice',payload);
			},3000);
		}
	}
}