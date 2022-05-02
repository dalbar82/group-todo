import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    events: []
  },
  mutations: {
    [types.SIGN_IN] (state, user_payload){
      state.user = user_payload
    },
    [types.SIGN_OUT] (state){
      state.user = {}
    },
    [types.SET_EVENTS] (state, events_payload){
      state.events = events_payload
    }
  },
  actions: {
    signIn ({commit}, user_payload) {
      commit(types.SIGN_IN, user_payload)
    },
    signOut ({commit}){
      commit(types.SIGN_OUT)
    },
    setEvents ({commit}, events_payload) {
      commit(types.SET_EVENTS, events_payload)
    }
  },
  modules: {
  }
})
