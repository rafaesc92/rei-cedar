// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'svgxuse';

import './css/main.postcss';
import App from './App';

import Plugins from './plugins/_index';

Object.keys(Plugins).forEach((key) => {
  Vue.use(Plugins[key].use, Plugins[key].options);
});

// Vue.use(lazyLoad, {
//   loading: spinner,
// });

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
