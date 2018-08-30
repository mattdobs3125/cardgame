<template>
    <div class="player" v-if="player.id">
        {{player}}
</div>
</template>
<script>
export default {
   name: 'Player',
   computed :{
       player(){
           return this.$store.state.player
       }
   }
};
</script>
