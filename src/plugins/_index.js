import lazyLoadPlugin from 'vue-lazyload';

const spinner = require('../assets/loading.gif');

export default {
  lazyLoad: {
    use: lazyLoadPlugin,
    options: {
      loading: spinner,
    },
  },
};
