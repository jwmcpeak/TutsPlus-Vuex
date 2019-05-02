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
    }],
    statusCodes: [
      {value: 'active', text: 'Active'},
      {value: 'hold', text: 'Hold'},
      {value: 'complete', text: 'Complete'},

    ]
  },
  mutations: {
    addTodo(state, newTodo) {
      newTodo.id = state.todos.length + 1;
      
      state.todos.push(newTodo);
    }
  },
  actions: {

  }
})
