import Vue from 'vue'
import Vuex from 'vuex'

import statusModule from './status-module';
import todoModule from './todo-module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    status: statusModule,
    todo: todoModule
  }
});
