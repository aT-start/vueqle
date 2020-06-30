<template>
  <div id="app">
    <!-- 表示除了detail页面级组件不做缓存，其他页面级组件都做缓存 -->
  	<keep-alive exclude="detail">
    	<router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
