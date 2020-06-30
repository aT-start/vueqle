<template>
	<div class="list" ref="wrapper">
		<div class="content">
			<div class="area" ref="top">
				<div class="title">
					您的位置
				</div>
				<div class="button-list">
					<div class="button">{{this.$store.state.city}}</div>
				</div>
			</div>
			<div class="area">
				<div class="title">
					热门城市
				</div>
				<div class="button-list">
					<div class="button" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</div>
				</div>

			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title">
					{{key}}
				</div>
				<div class="item-list">
					<div class="item" v-for="(value,key) in item" :key="key" @click="handleCityClick(value.name)">{{value.name}}</div>					
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default{
		name:"list",
		data(){
			return {
				isScroll:false
			}
		},
		props:{
    		// city:String,
    		hotCities:Array,
    		cities:Object,
    		letter:String
    	},
		mounted() {	

				console.log(this.hotCities.length);
				console.log(this.letter);
				setTimeout(()=>{
					this.scroll = new BScroll(this.$refs.wrapper,{
			    		click:true
			    	});
			    	this.isScroll=true;
				},300);
				// console.log(2);

			// }		      		    
    	},  
    	// 可去掉
    	activated () {
    		if (this.isScroll) {
    			this.scroll = new BScroll(this.$refs.wrapper,{
		    		click:true
		    	});
		    	this.scroll.scrollToElement(this.$refs.top);
    		}
    		
    	},
    	watch:{
    		letter(){
    			if(this.letter){
    				this.scroll.scrollToElement(this.$refs[this.letter][0]);
    			}
    			
    		}
    	},
    	methods:{
    		handleCityClick(city){
    			// this.$store.dispatch('changeCity',city);
    			this.$store.commit('changeCity',city);
    			this.$router.push({path:'/'});
    			// this.$router.push('/');
    		}
    	}
	}
</script>
<style lang="scss" scoped>
	// @import '../../../assets/scss/variables.scss';
	@import '~assets/scss/variables';
	.list{
		position:absolute;
		top:150px;
		right:0;
		bottom:0;
		left:0;
		overflow: hidden;
	}
	.title{
		line-height: 60px;
		padding-left:20px;
		background:#eee;
	}
	.button-list{
		border-top:1px solid #aaa;
		border-bottom:1px solid #aaa;
		padding:20px 60px 20px 20px;
		display:flex;
		flex-wrap: wrap;
		.button{
			width:170px;
			border:1px solid #aaa;
			padding:10px;
			text-align: center;
			border-radius:10px;
			margin:10px;
		}
	}
	.item-list{
		line-height: 80px;
		border-bottom:1px solid #aaa;
		border-top:1px solid #aaa;
		.item{
			padding-left:20px;
			border-bottom:1px solid #ccc;
		}
		.item:last-child{
			border-bottom:none;
		}
	}
</style>