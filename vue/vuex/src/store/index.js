/*
	用于存放项目中公共的数据
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入针对home模块的store
import home from './home.js';
// import cart from './cart.js';

export default new Vuex.Store({
	modules:{
		home,
		// cart
	}
});
