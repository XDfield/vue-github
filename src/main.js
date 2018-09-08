import Vue from "vue";
// 第三方库
import router from "~/router";

import App from "~/App";
import "~/assets/styles/css/index.scss";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
