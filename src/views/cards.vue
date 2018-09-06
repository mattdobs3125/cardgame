
<template>
  <div class="game">
    <div v-if="!game.id">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    </div>
    <div v-if="!game.over">
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
    <div v-if="game.over">
      <h1>Game Results: {{game.winner.name}}</h1>
    </div>
   
  </div>
</template>


   



    

<script>
// @ is an alias to /src
import playingGame from "@/components/PlayingGame";
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
<<<<<<< HEAD
=======
    //     attack(){
    // const Tattack ={
    // 	"playerId": this.cards.Player.id,
    // 	"playerCardId": this.setPlayerCard,
    // 	"opponentId": this.cards.adversary,
    // 	"opponentCardId": this.setAdversaryCard

    // }
    //     },

    // setAdversary(adversary) {
    //   this.$store.dispatch("setAdversary", adversary);
    // },
    // setPlayer(Player) {
    //   this.$store.dispatch("setPlayer", Player);
    // },
>>>>>>> 39b861700b8c084decc2ff18b14acab503cf81c1

    deckSelection(deckChoice) {
      this.$store.dispatch("deckSelection", deckChoice);
    }
  },
  computed: {
    setAdversaryCard() {
      return this.$store.adversaryCard;
    },
    setPlayerCard() {
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
