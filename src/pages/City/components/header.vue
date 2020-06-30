<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="header-left">
				<span class="iconfont">&#xe689;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		name:"city",
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	// @import '../../../assets/scss/variables.scss';
	@import '~assets/scss/variables';
	.header{
		position:relative;
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