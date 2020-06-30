<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe689;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe63c;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.$store.state.city}}<span class="iconfont">&#xe6e0;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
  export default{
    name: 'HomeHeader',
    data() {
      return {

      };
    }
    // ,
    // props:{
    // 	city:{
    // 		type:String,
    // 		default:'城市'
    // 	}
    // }
  };
</script>
<style lang='scss' scoped>
	// @import '~assets/scss/variables';
	@import '../../../assets/scss/variables.scss';
	.header{
		height:80px;
		display:flex;
		justify-content: space-between;
		align-items:center;
		background:$bgcolor;
		color:#fff;
		.header-left{
			width:64px;
			height:60px;
			line-height: 60px;
			text-align:center;
			.iconfont{
				font-size: 50px;
			}
		}
		.header-right{
			min-width:124px;
			text-align:center;
			height:60px;
			line-height: 60px;
			color:#fff;
			.iconfont{
				font-size: 15px;
			}
		}
		.header-input{
			flex-grow:1;
			background:#fff;
			border-radius:10px;
			height:60px;
			display:flex;
			align-items:center;
			margin-left:15px;
			color:#ccc;
			margin-right:10px;
			.iconfont{
				padding-left:10px;
				font-size: 40px;
			}
		}
	}

</style>
