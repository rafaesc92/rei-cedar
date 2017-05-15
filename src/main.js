import 'svgxuse';
import './css/main.postcss';

import Components from './components/_index';
// import Directives from './directives/_index';
import Plugins from './plugins/_index';


function install(Vue, options) {// eslint-disable-line
  const opts = options || {};

  Object.keys(Components).forEach((key) => {
    Vue.component(Components[key].name, Components[key]);
  });

  // Object.keys(Directives).forEach((key) => {
  //   Vue.directive(Directives[key].name, Directives[key]);
  // });

  Object.keys(Plugins).forEach((key) => {
    let plugOpts = {};
    if (opts[key]) {
      plugOpts = opts[key];
    } else {
      plugOpts = Plugins[key].options ? Plugins[key].options : {};
    }
    Vue.use(Plugins[key].use, plugOpts);
  });
}

export default {
  install,
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install }); // eslint-disable-line
}
