// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'            //引入路由模块
import App from './App'
import Routes from './routes'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI); //意思是，vue使用了element-ui



            //全局设置在main.js中
//自定义指令
//Vue.directive('指令名字', 对象{
//    bind(el,binding,vnode){
//
//          }
//
// })

//字体随机颜色
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);

  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value == 'wide') {
      el.style.maxWidth = "800px";
    }else if(binding.value == 'narrow') {
      el.style.maxWidth = "400px";
    }
    if (binding.arg == 'column') {
      el.style.background = "#eee";
      el.style.padding = '20px';
    }
  }
})

//自定义过滤器标题大写
Vue.filter("to-uppercase",function (value) {
  return value.toUpperCase();
})
//内容只显示前100字母
Vue.filter("snippet",function (value) {
  return value.slice(0,100) + "...";
})






//创建路由
const  router = new VueRouter({
  routes: Routes,
  mode:"history"

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
