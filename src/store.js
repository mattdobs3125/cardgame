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
    adversary:{},
    playerCard:'',
    adversaryCard:''

  },
  mutations: {
  set (state, data){
    state.game = data
    // router.push({name:'data',params:{ gameId: data.id}})
    console.log(data)
  },
  playerCardId(state,cardId){
    debugger
    state.playerCard = cardId
  },
  adversaryCardId(state,cardId){

    debugger
    state.adversaryCard = cardId
  },
  setPlayer(state,Player){
    state.player = Player
    console.log(Player)
  },
  setAdversary(state,adversary){
    state.adversary = adversary
  }
},
actions: {
  
  setAdversaryCard({commit,dispatch},card){
    commit('setAdversaryCard', card)
  },
  setPlayer({commit,dispatch},Player){
    commit('setPlayer', Player)
  },
  setAdversary({commit,dispatch},adversary){
    commit('setAdversary',adversary)
  },
  adversaryCardId({commit,dispatch},cardId){
    debugger
    commit('adversaryCardId',cardId)
  },
  playerCardId({commit,dispatch},cardId){
    commit('playerCardId',cardId)
  },
  
  deckSelection({dispatch,commit},choice){
    let deckChoice 
    switch(choice){
      case 1:
      deckChoice = {"playerName":"robotDeck","set":1}
      break
      case 2:
      deckChoice = {"playerName":"catDeck","set":4}
      break
      
    }
    cardApi.post('/',{"gameConfig" : deckChoice})
    .then(res => {
      commit('set' , res.data)
      commit('setPlayer', res.data.players[0])
      commit('setAdversary',res.data.players[1])
      
    })
    
    
    
    
  }
  
  
}
})
