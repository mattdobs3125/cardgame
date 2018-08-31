<template>
    <div class="Player" v-if="player.id">
        <div v-for="card in player.hand" :key="card.id">

        {{player}}
        </div>
</div>
</template>
<script>
export default {
   name: 'Player',
   computed :{
       Player(){
           return this.$store.state.player[0];
       }
   }
};
</script>
