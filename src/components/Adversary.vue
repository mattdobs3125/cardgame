<template>
    <div class="adversary row" v-if="adversary.id">
      <div class="col-3"></div>
        <div class="col-6">

          <div class="adversary" v-for="card in adversary.hand" :key="card.id">
            <img v-if="!card.visible" :key="card.id" @click='setAdversaryCard(card.id)' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBF_hN9qKTYv-KFj2fvps1CQnU-04P1V4Adw6Wwons7uIq5m8" width="150" height="250">
           <div v-else-if="card.visible">
           <img style="height:200px; width: 150px;" :src="card.img" :key="card.id" @click='setAdversaryCard(card.id)' alt=""  >
             <div class="hand">

             <h5 class="lok">Name: {{card.name}}</h5>

          <h5 class="lok">Cards Current Health : {{card.health}}</h5>
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
    adversary() {
      return this.$store.state.adversary;
    }
  },
  methods: {
    setAdversary(adversary) {
      this.$store.dispatch("setAdversary", adversary);
    },
    setAdversaryCard(cardId) {
      
      this.$store.dispatch("adversaryCardId", cardId);
    }
  }
};
</script>

<style>
  .col-6 {

   display: flex;
  flex-direction: row;
   justify-content: right;
   padding-right: 6rem;

   
}
.adversary{
  padding-right:34px;
    /* border-color: #808080 #000000 #000000 #808080;
  border-width: 3px;
  border-style: solid; */

}



</style>
  

  
  
