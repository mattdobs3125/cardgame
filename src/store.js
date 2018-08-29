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
    game:{}

  },
  mutations: {
  setG (state, data){
    state.game = data
    console.log(data)
  }
  },
  actions: {
    deckSelection({dispatch,commit},choice){
      let deckChoice 
      switch(choice){
        case 1:
        deckChoice = {"playerName":"robotDeck","opponents": 1 ,"set":1}
        break
        case 2:
        deckChoice = {"playerName":"catDeck","opponents": 1 ,"set":4}
        break
        
              }
              cardApi.post('/',{"ganeConfig" : deckChoice})
              .then(res => commit('setG' , res.data))



  }


}
})
