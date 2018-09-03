
<template>
  <div class="game">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    
      <div>
        <Player v-on:chosenCard="setPlayerCard(card)"/>
      </div>
      <div>

      </div>
     <div>
       <adversary v-on:chosenCard="setAdversaryCard(card)"/>
     </div>
   
  </div>
</template>


   



    

<script>
// @ is an alias to /src

import Player from "@/components/Player.vue";
import adversary from "@/components/Adversary.vue";

export default {
  name: "cards",
  data() {
    return {
      card: {},
      attack: {}
    };
  },
  components: {
    Player,
    adversary
  },
  methods: {
    attack(){
const Tattack ={
	"playerId": this.cards.Player.id,
	"playerCardId": this.setPlayerCard,
	"opponentId": this.cards.adversary,
	"opponentCardId": this.setAdversaryCard

}



    },
    // setAdversary(adversary) {
    //   this.$store.dispatch("setAdversary", adversary);
    // },
    // setPlayer(Player) {
    //   this.$store.dispatch("setPlayer", Player);
    // },

    deckSelection(deckChoice) {
      this.$store.dispatch("deckSelection", deckChoice);
    }
  },
  computed: {
    setAdversaryCard() {
      return this.$store.adversaryCard;
    },
    setPlayerCard(){
      return this.$store.playerCard;
    },
    game() {
      return this.$store.state.game;
    },
    Player() {
      return this.$store.state.Player;
    }
  }
};
</script>
