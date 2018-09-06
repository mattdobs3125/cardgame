import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

let cardApi = Axios.create({
  baseURL: "https://inspire-server.herokuapp.com/cards",
  timout: 3000
});

//used to store all my data

export default new Vuex.Store({
  state: {
    game: {},
    player: {},
    adversary: {},
    playerCard: "",
    adversaryCard: ""
  },
  mutations: {
    set(state, data) {
      state.game = data;
    },
    resetC(state){
      state.playerCard = ""
      state.adversaryCard = ""
    },
    playerCardId(state, cardId) {
      state.playerCard = cardId;
    },
    adversaryCardId(state, cardId) {
      state.adversaryCard = cardId;
    },
    setPlayer(state, Player) {
      state.player = Player;
      
    },
    setAdversary(state, adversary) {
      state.adversary = adversary;
    }
  },
  actions: {
    setPlayer({ commit, dispatch }, Player) {
      commit("setPlayer", Player);
    },
    setAdversary({ commit, dispatch }, adversary) {
      commit("setAdversary", adversary);
    },
    adversaryCardId({ commit, dispatch }, cardId) {
      commit("adversaryCardId", cardId);
    },
    playerCardId({ commit, dispatch }, cardId) {
      commit("playerCardId", cardId);
    },
    redrawGame({ commit, dispatch }, gameId) {
      cardApi.get("/" + gameId).then(res => {
        commit("set", res.data.data);
        commit("setPlayer", res.data.data.players[0]);
        commit("setAdversary", res.data.data.players[1]);
        commit("resetC");
      });
    },

    fight({ dispatch, commit }, hit) {
      cardApi.put("/" + hit.game, hit.battle).then(res => {
        dispatch("redrawGame", hit.game);
      });
    },
    deckSelection({ dispatch, commit }, choice) {
      let deckChoice;
      switch (choice) {
        case 1:
          deckChoice = { playerName: "robotDeck", set: 1 };
          break;
        case 2:
          deckChoice = { playerName: "catDeck", set: 4 };
          break;
      }
      cardApi.post("/", { gameConfig: deckChoice }).then(res => {
        commit("set", res.data);
        commit("setPlayer", res.data.players[0]);
        commit("setAdversary", res.data.players[1]);
      });
    }
  }
});
