<template>
	<div class="wrapper">
		<swiper :options="swiperOptions" v-if="swiperList.length">
	      	<swiper-slide v-for="item in swiperList" :key="item.id">
	      		<img class="swpimg" :src="item.imgUrl">
	      	</swiper-slide>
	      	<div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
	</div>
</template>
<script>
  export default{
    name: 'homeSwiper',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',           
          },
          loop:true
        }       
      };
    },
    props:{
    	swiperList:{
    		type:Array
    	}
    }
  };
</script>
<style lang="scss" scoped>
	.wrapper{
		overflow: hidden;
		width:100%;
		height:0;
		padding-bottom:300px;
	}
	.swpimg{
		width:100%;
		height:300px;
	}
	

</style>
