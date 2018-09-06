<template>
  <div class="Player row">
    <div class="col-4">

<<<<<<< HEAD
        <div v-for="card in Player.hand" :key="card.id">
             <img v-if="card.visible=false" :key="card.id" @click="setPlayerCard(card.id)" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7YuuQbInLJFRjJT-K6GdhsIi_c9-DIg-59H_pmfO_Sv_9gWl">
           <div v-else-if="card.visible=true">
           <img :key="card.id" @click="setPlayerCard(card.id)" :src="card.img" alt="">
           <div class="hand">
           
            <h1>{{card.name}}</h1> 
            <h1>{{card.health}}</h1>
            {{card.defense}}
           </div>
=======
      <div v-for="card in Player.hand" :key="card.id">
        <div>
          <img :src="card.img" :key="card.id" @click='setPlayerCard(card.id)' alt="">
          <div class="hand">
            <h4>Name: {{card.name}}</h4>
            <h4>Cards Current Health : {{card.health}}</h4>
            <h4>Attack : {{card.attack}}</h4>
            <h4> Defense : {{card.defense}}</h4>
          </div>
>>>>>>> 39b861700b8c084decc2ff18b14acab503cf81c1
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
<<<<<<< HEAD
<style>

</style>
=======
<style scoped>
  .row{

  flex-direction: row;
}
</style>
>>>>>>> 39b861700b8c084decc2ff18b14acab503cf81c1
