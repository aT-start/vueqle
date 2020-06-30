<template>
	<div class="wrapper" @click="hideClick">
		<div class="gallery" v-if="imgs.length">
			<swiper :options="swiperOptions" >
		      	<swiper-slide v-for="(item,index) in imgs" :key="index">
		      		<img class="swpimg" :src="item">
		      	</swiper-slide>
		      	<div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
	    </div>
	</div>
</template>
<script>
	export default{
		name:"gallery",
		data () {
			return {
				swiperOptions: {
		          pagination: {
		            el: '.swiper-pagination',    
		            type:'fraction'		            
		          },
		          observeParents: true,//修改swiper自己或子元素时，自动初始化swiper
        		  observer: true,  //修改swiper的父元素时，自动初始化swiper
        		  loop:true
		        }  
			}
		},
		methods:{
			hideClick () {
				this.$emit("change");
			}
		},
		props:{
			imgs:{
				type:Array
			}
		}
	}

</script>
<style lang="scss" scoped>
	.wrapper{
		position:fixed;
		top:0;
		bottom:0;
		right:0;
		left:0;
		background:black;
		z-index: 11;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	.gallery{
		width:100%;
		height:600px;
		// overflow:hidden;
		.swpimg{
			width:100%;
			height:600px;
		}
		.swiper-pagination{
			color:#fff;
			position:absolute;
			top:700px;
		}
		.swiper-container{
			overflow: visible;
		}
	}


</style>