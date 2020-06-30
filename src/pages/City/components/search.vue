<template>
	<div>
		<div class="search">
			<input v-model="keyword" type="text" name="" class="seach-input" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul class="content">
				<li class="search-item" v-for="item in searchList" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item" v-show="hasNoData">
		          没有找到匹配数据
		        </li>
			</ul>			
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default{
		name:"search",
		data(){
			return {
				keyword:"",
				searchList:[],
				timer:null
			}
		},
		computed:{
			hasNoData () {
				return !this.searchList.length;
			}
		},
		props:{
			cities:{
				type:Object
			}
		},
		updated(){
			 // new BScroll(this.$refs.search);
			 // 更新搜索框滚动条
			 this.scroll.refresh();
		},
		mounted () {
			setTimeout(()=>{
				this.scroll = new BScroll(this.$refs.search,{ click: true});
			},20);
			// this.scroll = new BScroll(this.$refs.search);
		},
		methods:{
    		handleCityClick(city){
    			// this.$store.dispatch('changeCity',city);
    			this.$store.commit('changeCity',city);
    			this.$router.push({path:'/'});
    			// this.$router.push('/');
    		}
    	},
		watch:{
			keyword () {
				if(this.timer){
					clearTimeout(this.timer);
				}
				// 输入为空时，无搜索结果
				if(!this.keyword){
					this.searchList=[];
					return;
				}
				this.timer=setTimeout(()=>{
					const searchLetter=[];
					for(let key in this.cities){
						this.cities[key].forEach((value,index)=>{
							if(value.name.indexOf(this.keyword)>-1||value.spell.indexOf(this.keyword)>-1){
								searchLetter.push(value);
							}
						});
					}
					this.searchList=searchLetter;
					console.log(this.searchList);
				},100);		
						
			}
		}
	}
</script>
<style lang="scss" scoped>
	// @import '../../../assets/scss/variables.scss';
	@import '~assets/scss/variables';
	.search{
		height:70px;
		background:$bgcolor;
		text-align: center;
		.seach-input{
			width:95%;
			height:60px;
			border-radius:10px;
			text-align: center;
			padding:0 10px;
		}
	}
	.search-content{
		z-index:1;
		position:absolute;
		top:150px;
		right:0px;
		bottom:0px;
		left:0px;
		overflow: hidden;
		background:#eee;
		.content{
			// height:100%;
			// overflow: hidden;
		}
		.search-item{
			line-height: 60px;
			background:#fff;
			border-bottom:1px solid #eee;
			padding-left:20px;
		}
	}

</style>