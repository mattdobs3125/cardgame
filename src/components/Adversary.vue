<template>
    <div class="adversary" v-if="adversary.id">
        {{adversary}}
</div>
</template>
<script>
export default {
   name: 'Adversary',
   computed :{
       adversary(){
           return this.$store.state.adversary
       }
   }
};
</script>
