// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

Vue.config.productionTip = false;
Vue.component("SiteHeader", SiteHeader);
Vue.component("SiteFooter",SiteFooter);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
