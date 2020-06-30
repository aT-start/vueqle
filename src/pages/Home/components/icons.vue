<template>
	<div class="icons">
		<swiper >
			<swiper-slide v-for="(page,index) in pages" :key='index'>
				<div class="icon" v-for="item in page" :key="item.id">			
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<div class="icon-desc">{{item.desc}}</div>			
				</div>
			</swiper-slide>
		</swiper>		
	</div>
</template>
<script>
  export default{
    name: 'HomeIcons',
    data() {
      return {
      	
      };
    },
    computed:{
    	pages () {
    		const pages=[];
    		this.iconList.forEach((item,index)=>{
    			const page=Math.floor(index/8);
    			if(!pages[page]){
    				pages[page]=[];
    			}
    			pages[page].push(item);
    		})
    		return pages;
    	}
    },
    props:{
    	iconList:{
    		type:Array
    	}
    }
  };
</script>
<style lang='scss' scoped>
	@import '~@/assets/scss/mixins';
	// @import '../../../../assets/scss/mixins.scss';


	.swiper-container{
		width:100%;
		height:0;
		padding-bottom:50%;
		overflow: hidden;
	}
	.icon{
		width:25%;
		height:0;
		padding-bottom:25%;
		overflow: hidden;
		float:left;

		.icon-img{
			width:100%;
			text-align: center;
			padding-top:20px;
			.icon-img-content{
				width:60%;
				height:100px;
			}
		}
		.icon-desc{
			text-align:center;
			padding-top:20px;
			@include ellipsis;
		}
	}

	

</style>
