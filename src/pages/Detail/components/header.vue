<template>
	<div>
		<router-link tap="div" to="/" class="header-back" v-show="showHeader">
			<span class="iconfont">&#xe689;</span>
		</router-link>
		<div class="header-fixed" v-show="!showHeader" :style="opacityStyle">	
			景点详情
			<router-link to="/">
				<div class="header-left">
					<span class="iconfont">&#xe689;</span>
				</div>
			</router-link>	
		</div>
	</div>
</template>
<script>
	export default{
		name:"detailHeader",
		data () {
			return {
				showHeader:true,
				opacityStyle:{
					'opacity':'0'
				}
			}
		},
		components:{
			
		},
		methods:{
			handleScroll () {
				let top=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
				if(top>45){
					let opacity=top/140;
					this.opacityStyle.opacity=opacity>=1?1:opacity;
					this.showHeader=false;
				}else{
					this.showHeader=true;
				}
			}
		},
		mounted () {
			window.addEventListener("scroll",this.handleScroll);
		},
		destroyed () {
			window.removeEventListener("scroll",this.handleScroll);
		}

	}
</script>
<style lang="scss" scoped>
	@import '~assets/scss/variables';
	.header-back{
		width:80px;
		height:80px;
		border-radius:40px;
		background:#000;
		text-align: center;
		line-height: 80px;
		color:#fff;
		position:absolute;
		top:10px;
		left:10px;
	}
	.header-fixed{
		position:fixed;
		z-index:1;
		top:0;
		width:100%;
		height:80px;
		background:$bgcolor;
		color:#fff;		
		text-align:center;	
		line-height:80px;	
		font-size:40px;
		.header-left{
			position:absolute;
			top:0;
			left:0;
			width:64px;
			text-align:center;
			color:#fff;
			.iconfont{
				font-size: 50px;
			}
		}

	}

</style>