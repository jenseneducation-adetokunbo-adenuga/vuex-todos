import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addtodo(state, content) {
      state.todos.push({
        id: Date.now(),
        content: content,
        done: false
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    update(state, payload) {
      const todo = state.todos.find(todo => todo.id == payload.payload.id);
      todo.content = payload.payload.newcontent;
    }
  },
  actions: {
    addActionsTodo(context, content) {
      context.commit("addtodo", content);
    }
  }
});
