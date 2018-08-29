import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let cardApi = Axios.create({
  baseURL:'https://inspire-server.herokuapp.com/cards',
  timout: 3000
})



export default new Vuex.Store({
  state: {
    game:[]

  },
  mutations: {

  },
  actions: {

  }
})
