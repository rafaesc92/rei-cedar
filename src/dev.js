// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import lazyLoad from 'vue-lazyload';

import './css/main.postcss';
import App from './App';

const spinner = require('./assets/loading.gif');

Vue.use(lazyLoad, {
  loading: spinner,
});

// TODO: include plugins?
// import Directives from './directives/_index';

// Object.keys(Directives).forEach((key) => {
//   Vue.directive(Directives[key].name, Directives[key]);
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
