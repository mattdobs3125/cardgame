<template>
  <div class="game">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
    
      <div>
        <Player />
      </div>
     <div>
       <adversary/>
     </div>
   
  </div>
</template>


   



    

<script>
// @ is an alias to /src

import Player from '@/components/Player.vue'
import adversary from '@/components/Adversary.vue'

export default {
  name: 'cards',
  components:{
    Player,
    adversary
 
 }, 
  methods:{
setAdversary(adversary){
this.$store.dispatch('setAdversary',adversary)
},
setPlayer(Player){
  console.log (Player)
  this.$store.dispatch('setPlayer',Player)
},
deckSelection(deckChoice){
  console.log(deckChoice)
  this.$store.dispatch("deckSelection",deckChoice)
  }
},
computed:{
  game(){
    return this.$store.state.game
  },
  Player(){
    return this.$store.state.Player
  }
  }
  }

</script>
