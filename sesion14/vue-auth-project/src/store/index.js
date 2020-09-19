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
    login(state, token) {
      state.token = token
    },
    logout(state) {
      state.token = ''
    }
  },
  actions: {
    login({ commit }) {
      return new Promise((resolve) => {
        const token = 'valor que llega de una llamada remota'
        localStorage.setItem('token', token)
        commit('login', token)
        resolve()
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
})
