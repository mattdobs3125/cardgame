<template>
    <div class="Player row">
        <div class="col-4">

        <div v-for="card in Player.hand" :key="card.id">
             <img v-if="!card.visible" :key="card.id" @click="setPlayerCard(card.id)" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7YuuQbInLJFRjJT-K6GdhsIi_c9-DIg-59H_pmfO_Sv_9gWl">
           <div v-else-if="card.visible">
           <img :src="card.img" alt="">
           <div class="hand">
           
            {{card.name}} 
            {{card.health}}
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
/* .hand{
     display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
} */
</style>
