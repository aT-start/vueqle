<template>
	<div>
		<div class="recommend-title">热销推荐</div>
    <ul>
      <router-link 
        tag="li"
        class="recommend-item border-bottom" 
        v-for="item in recommendList" 
        :key="item.id" 
        :to="'/detail/'+item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" class="img">
        </div>
        <div class="item-container">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
	</div>
</template>
<script>
  export default{
    name: 'HomeRecommend',
    data() {
      return {
      	
      };
    },
    props:{
      recommendList:{
        type:Array
      }
    }   
  };
</script>
<style lang='scss' scoped>
  @import '~@/assets/scss/mixins';
  .recommend-title{
    line-height: 60px;
    background:#eee;
    padding-left:20px;
  }
	.recommend-item{
    width:100%;
    // height:300px;
    border-bottom:1px solid #eee;
    padding-top:20px;
    padding-left:20px;
    padding-bottom:10px;
    display:flex;
    .item-img{
      width:30%;      
      img{
        width:100%;
      }
    }
    .item-container{
      width:70%;
      font-size:35px;
      padding-left:20px;
      // min-width: 0;
      .item-title,.item-desc{
        line-height: 40px;  
        @include  ellipsis;    
      }
      .item-desc{
        font-size:30px;
        color:#888;
        padding-top:5px;
      }
      .item-button{
        font-size:30px;
        background:#ff9300;
        border-radius:10px;
        padding:0 10px;
        color:#fff;
        margin-top:10px;
      }
    }
  }
</style>
