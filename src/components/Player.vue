<template>
    <div class="Player row">
        <div class="col-4">

        <div v-for="card in Player.hand" :key="card.id">
             <img v-if="card.visible=false" :key="card.id" @click="setPlayerCard(card.id)" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7YuuQbInLJFRjJT-K6GdhsIi_c9-DIg-59H_pmfO_Sv_9gWl">
           <div v-else-if="card.visible=true">
           <img :key="card.id" @click="setPlayerCard(card.id)" :src="card.img" alt="">
           <div class="hand">
           
            <h1>{{card.name}}</h1> 
            <h1>{{card.health}}</h1>
            {{card.defense}}
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
    },
  },
  methods: {
    setPlayer(player) {
      this.$store.dispatch("setPlayer", player);
    },
    setPlayerCard(cardId) {
        
      this.$store.dispatch("playerCardId",cardId);
    }
  }
};
</script>
<style>

</style>
