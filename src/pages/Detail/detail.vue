<template>
	<div>
		<detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="categoryList" ></detail-list>
		</div>
	</div>
</template>
<script>
	import detailBanner from './components/banner.vue';
	import detailHeader from './components/header.vue';
	import detailList from './components/list.vue';
	import axios from "axios";
	export default{
		name:"detail",
		data () {
			return {
				bannerImg:'',
				categoryList:[],
				gallaryImgs:[],
				sightName:''			
			}
		},
		components:{
			detailBanner,
			detailHeader,
			detailList
		},
		methods:{
			getDetailInfo () {
				axios.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then((res)=>{
					const ret=res.data.ret;
					const data=res.data.data;
					if(ret&&data){
						this.bannerImg=data.bannerImg;
						this.categoryList=data.categoryList;
						this.gallaryImgs=data.gallaryImgs;
						this.sightName=data.sightName;
					}
					
				});
			}
		},
		mounted () {			
			this.getDetailInfo();
		}

	}

</script>
<style lang="scss" scoped>
	.content{
		height:2000px;
	}
</style>