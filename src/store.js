import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    tabs: []
  },
  mutations: {
    SET_TABS(state, tabs) {
      state.tabs = tabs
    },
  },
  actions: {
    loadTabs({commit}) {
      axios
        .get('http://localhost:7000/tabsLibrary')
        .then((response) => {
          commit('SET_TABS', response.data)
          console.log(response.data)
        })
    },
    submitTab: function ({commit}, payload) {
      console.log('hello from store' + JSON.stringify(payload))
      axios({
        url: 'http://localhost:7000/tabsLibrary/',
        method: 'POST',
        data: payload
      })
    },
    removeTab({commit}, payload) {
      console.log(payload)
      axios
      .delete('http://localhost:7000/tabsLibrary/' + payload)
      .then(function(response) {
        console.log(response)
        if( response.stats == 200) {
          this.dispatch('SET_TABS', payload)
        }
      })
    }
  },
  getters: {
    tabs: (state) => state.tabs,
  }
})