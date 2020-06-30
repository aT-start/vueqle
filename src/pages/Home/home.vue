<template>
	<div class="home">
		<home-header :city="city"></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>
<script>
  import homeHeader from './components/header.vue';
  import homeSwiper from './components/swiper.vue';
  import homeIcons from './components/icons.vue';
  import homeRecommend from './components/recommend.vue';
  import homeWeekend from './components/weekend.vue';
  import axios from 'axios';
  export default{
    name: 'Home',
    components: {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend,
      homeWeekend

    },
    data() {
      return {
        lastCity:'',
        city:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      };
    },
    mounted () {
      this.lastCity=this.$store.state.city;
      this.getHomeInfo();
    },
    activated () {
      if(this.lastCity!==this.$store.state.city){
        this.lastCity=this.$store.state.city;
        this.getHomeInfo();
      }
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json?city='+this.$store.state.city).then((res)=>{
          console.log(res);
          const data=res.data.data;
          const ret=res.data.ret;
          console.log(data.swiperList);
          
          if(ret&&data){
            this.city=data.city;
            this.swiperList=data.swiperList;
            this.iconList=data.iconList;
            this.recommendList=data.recommendList;
            this.weekendList=data.weekendList;

          }
          
        });
      }
    }
  };
</script>
<style lang='scss' scoped>
  .home{
    width:100%;
    overflow: hidden;
  }
</style>
