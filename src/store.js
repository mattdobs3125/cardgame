import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router';

Vue.use(Vuex)

let cardApi = Axios.create({
  baseURL:'https://inspire-server.herokuapp.com/cards',
  timout: 3000
})

//used to store all my data

export default new Vuex.Store({
  state: {
    game:{},
    player:{},
    adversary:{}


  },
  mutations: {
  set (state, data){
    state.game = data
    // router.push({name:'data',params:{ gameId: data.id}})
    console.log(data)
  },
  setPlayer(state,){

  }
  },
  actions: {
    getPlayer({commit,dispatch}){

    },
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
              .then(res => commit('set' , res.data))



  }


}
})
