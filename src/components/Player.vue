<template>
  <div class="Player row">
     <div class="col-3"></div>
    <div class="col-6">

      <div class="playerHand" v-for="card in Player.hand" :key="card.id">
        <div>
          <img style="height: 200px; width: 150px;" :src="card.img" :key="card.id" @click='setPlayerCard(card.id)' alt="">
          <div class="hand">
            <h5 class="lok">Name: {{card.name}}</h5>
            <h5 class="lok">Health : {{card.health}}</h5>
            <h5 class="lok">Attack : {{card.attack}}</h5>
            <h5 class="lok"> Defense : {{card.defense}}</h5>
          </div>
        </div>
      </div>
       <div class="col-3"></div>
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
<style>
.lok{
  border-block-end: 3rem;
  color: rgb(8, 6, 6);
justify-content: right;
text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
}
  .col-6 {

  flex-direction: row;
   justify-content: center;
}
.playerHand  
 {
    padding-right: 34px;
   
   /* padding: .5in; */
 }  
  

  
  
</style>
