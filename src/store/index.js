import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    filter: '',
  },
  getters: {
  },
  mutations: {
    SET_LIST(state, obj){
      state.list = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
