import Vue from 'vue';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import 'mint-ui/lib/style.css';
import App from './app';
import routes from './route';

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const router = new VueRouter({
  base: __dirname,
  routes
});

const store = new Vuex.Store({
  modules: {},
  strict : debug,
  plugins: debug ? [createLogger()] : []
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  store
});
