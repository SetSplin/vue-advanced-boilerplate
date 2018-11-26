import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import account from '@/store/modules/account';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});