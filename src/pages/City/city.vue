<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :city="city" :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
		<cityAlphabet :cities="cities" @change="handleLetterChange"></cityAlphabet>
	</div>
</template>
<script>
	import cityHeader from './components/header.vue';
	import citySearch from './components/search.vue';
	import cityList from './components/list.vue';
	import cityAlphabet from './components/alphabet.vue';
	import axios from 'axios';
	export default{
		name:"city",
		data(){
			return {
				city:'',
				hotCities:[],
				cities:{},
				letter:''
			}
		},
		components:{
			cityHeader,
			citySearch,
			cityList,
			cityAlphabet
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				axios.get('/api/city.json').then((res)=>{
					// console.log(res);
					const ret=res.data.ret;
					const data=res.data.data;
					if(ret&&data){
						this.city=data.city;
						this.hotCities=data.hotCities;
						this.cities=data.cities;
					}
				});
			},
			handleLetterChange (letter) {
				this.letter=letter;				
			}
		}
	}
</script>
<style lang="scss" scoped>

</style>