import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
export const store = Vue.observable({count:0})
export const mutations = {
  setCount(count){
    store.count = count;
  }
}