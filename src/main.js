import Vue from "vue";

import router from "~/router";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// vue-awesome
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

import App from "~/App";
import "~/assets/styles/css/index.scss";

Vue.component("v-icon", Icon);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
