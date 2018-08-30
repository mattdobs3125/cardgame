<template>
  <div class="game">
      <h1>Choose Your Deck</h1>
      <button type="button" class="btn btn-warning" @click='deckSelection(1)'>Robot Deck</button>
      <button type="button" class="btn btn-primary" @click='deckSelection(2)'>Cat Deck</button>
      <div v-if="game.id">
        {{game.id}}
        
        
      </div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

   



    

<script>
// @ is an alias to /src


export default {
  name: 'cards',
  components: {},
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
