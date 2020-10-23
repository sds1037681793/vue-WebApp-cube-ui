import Vue from 'vue'
import Router from 'vue-router'
import Index from '@pages/index'//首页
Vue.use(Router)
 
export default new Router({
  routes: [
    {//首页
      path: '/',
      name: '主页',
      component: Index
    },
  ]
})