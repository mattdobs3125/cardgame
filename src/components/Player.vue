<template>
    <div class="Player">
     <!-- v-if="Player.id"> -->
        <div v-for="player in Player" :key="player.id">

        {{Player}}
        </div>
</div>
</template>
<script>
export default {
   mounted(){
       return this.$store.dispatch("getPlayer");
   },
   computed:{
       Player(){
           return this.$store.state.player
       }
   },
   methods:{
       setPlayer(player){
           this.$store.dispatch('setPlayer', player)
       }
   }
};
</script>
