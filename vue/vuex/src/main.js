import Vue from 'vue';

import App from './App.vue';

// 引入store公共仓库
import store from './store';

new Vue({
	el:'#app',

	// 把store注入根实例
	store,
	
	// template:`<app/>`,
	// components:{
	// 	App
	// },
	render:c=>c(App)
});