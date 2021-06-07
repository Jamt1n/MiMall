import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from  "./store";
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie"
// import env from './env'

const mock = false; // mock开关
if (mock) {
  require("./mock/api");
}

// 根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api'; //如果cros或者jsonp就要补全http://
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = "/#/login";
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
