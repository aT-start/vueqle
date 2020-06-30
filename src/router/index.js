/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/Home/home.vue';
import City from '@/pages/City/city.vue';
import Detail from '@/pages/Detail/detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  // 页面切换的时候，始终回到最顶部。
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
