import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDelete: [],
    todos: [],
    statusCodes: [
      {value: 'active', text: 'Active'},
      {value: 'hold', text: 'Hold'},
      {value: 'complete', text: 'Complete'},
    ]
  },
  getters: {
    selectedCount(state) {
      return state.toDelete.length;
    },
    todos: (state) => (status) => {
      if (!status) {
        return state.todos.filter(todo => todo.status !== 'deleted');
      }

      return state.todos.filter(todo => todo.status === status);
    }
  },
  mutations: {
    toggleDelete(state, id) {
      let index = state.toDelete.indexOf(id);

      if (index === -1) {
        state.toDelete.push(id);
      } else {
        state.toDelete.splice(index, 1);
      }
    },
    addTodo(state, newTodo) {
      
      
      state.todos.push(newTodo);
    },
    removeTodo(state, id) {
      let index = state.todos.findIndex(item => item.id === id);

      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
    setTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    deleteSelectedTodos({state, commit}) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          for (let ii = state.toDelete.length; ii > 0; ii--) {
            let id = state.toDelete[ii-1];
            
            commit('removeTodo', id);
            commit('toggleDelete', id);
          }

          res();
        }, 2000);
      });
    },
    getTodos({commit}) {
      return axios.get('todo-data.json').then((res) => {
        commit('setTodos', res.data);
      });
    },
    createTodo({state, commit}, newTodo) {
      // make request
      return new Promise((res, rej) => {
        newTodo.id = state.todos.length + 1;

        commit('addTodo', newTodo);

        res();
      });
      
    }
  }
})
