<template>
	<div>
		<div class="list" v-for="(item,index) in list" :key="index">
			<div class="list-item-title">
				<span class="title-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="item-chilren">
				<!-- 递归组件(组件的自身调用组件的自身) 这里的组件标签名是根据name属性来的-->
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		name:"detailList",
		data () {
			return {
				
			}
		},
		components:{
			
		},
		methods:{
			
		},
		props:{
			list:{
				type:Array
			}
		}

	}
</script>
<style lang="scss" scoped>
	@import '~assets/scss/variables';
	.list-item-title{
		// width:100%;
		height:80px;
		line-height: 80px;
		border-bottom:1px solid #eee;
		padding-left:100px;
		position:relative;
		.title-icon{
			display:inline-block;
			position:absolute;
			left:30px;
			width:100px;
			height:80px;
			background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 15px no-repeat;
			background-size:60%;
		}
	}
	.item-chilren{
		padding-left:30px;
	}
</style>