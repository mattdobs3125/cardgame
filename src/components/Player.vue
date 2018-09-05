<template>
  <div class="Player row">
    <div class="col-4">

      <div v-for="card in Player.hand" :key="card.id">
        <div>
          <img :src="card.img" :key="card.id" @click='setPlayerCard(card.id)' alt="">
          <div class="hand">
            <h4>Name: {{card.name}}</h4>
            <h4>Cards Current Health : {{card.health}}</h4>
            <h4>Attack : {{card.attack}}</h4>
            <h4> Defense : {{card.defense}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      Player() {
        return this.$store.state.player;
      }
    },
    methods: {
      setPlayer(player) {
        this.$store.dispatch("setPlayer", player);
      },
      setPlayerCard(cardId) {
        this.$store.dispatch("playerCardId", cardId);
      }
    }
  };
</script>
<style scoped>
  .row{

  flex-direction: row;
}
</style>