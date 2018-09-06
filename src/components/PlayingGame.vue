<template>
<div>
    <div>
<<<<<<< HEAD

    <!-- <h1>{{pCard }}</h1>
    <h1>{{aCard}}</h1>
    <h1>{{adversary}}</h1>
    <h1>{{player}}</h1> -->
    <button@click="fight()">FIGHTs</button>
=======
       <h1> {{aCard}}</h1>
        <h1>
            {{pCard}}
            </h1>
            <h1>

        {{adversary}}
            </h1>
            <h1>

        {{player}}
            </h1>
       <button type="button" class="btn btn-danger" @click="fight()">FIGHT</button>
>>>>>>> 39b861700b8c084decc2ff18b14acab503cf81c1
    </div>

</div>
</template>
<script>
export default {
  name: "playingGame",
  computed: {
    aCard() {
      return this.$store.state.adversaryCard;
    },
    pCard() {
      return this.$store.state.playerCard;
    },
    player() {
      return this.$store.state.player.id;
    },
    adversary() {
      return this.$store.state.adversary.id;
    },
    game() {
      return this.$store.state.game.id;
    }
  },

  methods: {
    fight() {
      let game = this.game;
      let battle = {
        playerId: this.player,
        playerCardId: this.pCard,
        opponentId: this.adversary,
        opponentCardId: this.aCard
      };

      this.$store.dispatch("fight", { game, battle });
    }
  }
};
</script>
<style scoped>
</style>