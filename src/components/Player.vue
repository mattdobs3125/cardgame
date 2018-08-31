<template>
    <div class="Player">
     <!-- v-if="Player.id"> -->
        <div v-for="Player in Player" :key="Player.id">

        {{Player}}
        </div>
</div>
</template>
<script>
export default {

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
