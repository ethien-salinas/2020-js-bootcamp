import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ''
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    logout(state) {
      state.token = ''
    }
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
})
