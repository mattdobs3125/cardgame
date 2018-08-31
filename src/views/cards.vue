<template>
  <div class="game">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    
      <div>
        <Player/>
     <!-- <img :src="car.img" > -->
      </div>
   
  </div>
</template>


   



    

<script>
// @ is an alias to /src

import Player from '@/components/Player.vue'
export default {
  name: 'cards',
  components: 
 {Player}, 
  methods:{
deckSelection(deckChoice){
  console.log(deckChoice)
  this.$store.dispatch("deckSelection",deckChoice)
  }
},
computed:{
  game(){
    return this.$store.state.game
  }
  }
  }

</script>
