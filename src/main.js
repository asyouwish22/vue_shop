// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css"
import "./assets/fonts/iconfont.css"
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

//配置请求根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')

  return config;
})

Vue.prototype.$http=axios

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('tree-table',TreeTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
