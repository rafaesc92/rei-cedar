// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import 'svgxuse';
import Components from './components/_index';
// import './css/main.postcss';

Vue.use(vueCustomElement);

Object.keys(Components).forEach((key) => {
  Vue.customElement(Components[key].name, Components[key]);
});
