<template>
  <div class="game">
    <div class="selection">
      <h1>Choose Your Deck</h1>
      <button @click='deckSelection(1)'></button>
      <img src="https://robohash.org/YOUR-TEXT.png?set=set1">

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
  }
}
</script>
