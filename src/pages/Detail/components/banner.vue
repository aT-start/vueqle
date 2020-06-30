<template>
	<div>
		<div class="banner" @click="handleBannerClickShow">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">
					{{sightName}}
				</div>
				<div class="banner-number">
					<span class="banner-icon iconfont">&#xe639;</span>
					{{gallaryImgs.length}}
				</div>
			</div>		
		</div>
		<common-fade>
			<common-gallery 
				v-show="showGallery" 
				@change="hideGallery" 
				:imgs="gallaryImgs"
			>	
			</common-gallery>
		</common-fade>
	</div>
</template>
<script>
	import commonGallery from '@/common/gallery/gallery.vue';
	import commonFade from '@/common/fade/fade.vue';
	export default{
		name:"detailBanner",
		data () {
			return {
				showGallery:false				
			}
		},
		components:{
			commonGallery,
			commonFade
		},
		methods:{
			handleBannerClickShow () {
				this.showGallery=true;
			},
			hideGallery () {
				this.showGallery=false;
			}
		},
		props:{
			bannerImg:{
				type:String
			},
			sightName:{
				type:String
			},
			gallaryImgs:{
				type:Array
			}
		}

	}
</script>
<style lang="scss" scoped>
	.banner{
		width:100%;
		height:400px;
		position:relative;
		.banner-img{
			width:100%;
			height:100%;
		}
		.banner-info{
			position:absolute;
			bottom:0;
			right:0;
			left:0;	
			height:80px;
			line-height: 80px;
			display:flex;
			color:#fff;
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
			.banner-title{
				flex-grow:1;
				font-size:36px;
				padding-left:20px;
			}
			.banner-number{
				background:rgba(0, 0, 0, .8);
				border-radius:10px;
				width:120px;
				height:36px;
				line-height:36px;
				text-align: center;
				margin-right:20px;
				margin-top:22px;
				.banner-icon{
					font-size: 26px;
					// padding-right:10px;

				}
			}
		}
	}

</style>