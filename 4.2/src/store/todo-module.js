import axios from 'axios';

export default {
    state: {
      toDelete: [],
      todos: [],
    },
    getters: {
      selectedCount(state, getters, rootState) {
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
      deleteSelectedTodos({state, commit, rootState}) {
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
  };