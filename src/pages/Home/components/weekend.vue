<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-item" v-for="item in weekendList" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" class="img">
        </div>
        <div class="item-container">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
	</div>
</template>
<script>
  export default{
    name: 'HomeIcons',
    data() {
      return {
      	
      };
    },
    props:{
      weekendList:Array
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

    padding-bottom:20px;
    .item-img{
      width:100%;      
      img{
        width:100%;
        height:300px;
      }
    }
    .item-container{
      // width:70%;
      font-size:35px;
      padding-left:20px;
      padding-top:20px;
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
