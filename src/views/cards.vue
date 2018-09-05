
<template>
  <div class="game">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    
      <div>
        <Player/>
      </div>
      <div>
        <playingGame/>
      </div>
     <div>
       <adversary/>
     </div>
   
  </div>
</template>


   



    

<script>
// @ is an alias to /src
import playingGame from "@/components/PlayingGame"
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
    adversary,
    playingGame
  },
  methods: {

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
