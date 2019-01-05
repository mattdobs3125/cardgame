
<template>
  <div class="game row">
    <div  class="col-12" v-if="!game.id">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    </div>
    <div  class="col-12" v-if="!game.over">
      <div>
        <playingGame/>
      </div>
      <div class="col-12">
        <Player class="player"/>
      </div>
     <div class="col-12">
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
<style scoped>
.game{
  /* background-image:"https://vignette.wikia.nocookie.net/world-of-cataclysm/images/f/f6/Background_naruto_by_nitopfam-d78kh4e.png/revision/latest?cb=20180325151742" */
background-color: aqua;
/* background-image:url("https://vignette.wikia.nocookie.net/world-of-cataclysm/images/f/f6/Background_naruto_by_nitopfam-d78kh4e.png/revision/latest?cb=20180325151742 "); */
width: 500px;
 height: 600px;
  justify-content: right;
  flex-direction: row;
}
.player{
  
}
</style>

