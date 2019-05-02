import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 1,
      task: 'Write TODO Application',
      description: 'Write the TODO app.',
      status: 'active'
    }, {
      id: 2,
      task: 'Add HTTP Communication',
      description: 'Add support for async HTTP communication to grab data.',
      status: 'hold'
    }]
  },
  mutations: {

  },
  actions: {

  }
})
