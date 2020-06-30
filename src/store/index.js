import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity="天津";
// try...catch的作用是确保浏览器就不能识别localStorage时(也就是用户关闭了浏览器本地存储的功能或使用隐身模式)，也能正常执行程序。
try{
	if(localStorage.city){
		defaultCity=localStorage.city;
	}
}catch (e) {

}

export default new Vuex.Store({
	state:{
		city:defaultCity
	},
	mutations:{
		changeCity (state,city) {
			state.city=city;
			try{
				localStorage.city=city;
			}catch (e) {

			}
			
		}
	}
	// ,
	// actions:{
	// 	changeCity (ctx,city) {
	// 		ctx.commit('changeCity',city);
	// 	}
	// }
})