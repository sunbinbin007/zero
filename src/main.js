import Vue from 'vue';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css';
import App from './app';
import routes from './route';

Vue.use(MintUI);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
