<template>
    <div class="adversary row" v-if="adversary.id">
        <div class="col-md-12">

          <div v-for="card in adversary.hand" :key="card.id">
            <img v-if="!card.visible" :key="card.id" @click='setAdversaryCard(card.id)' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBF_hN9qKTYv-KFj2fvps1CQnU-04P1V4Adw6Wwons7uIq5m8">
           <div v-else-if="card.visible">
           <img :src="card.img" :key="card.id" @click='setAdversaryCard(card.id)' alt=""  >
             <h4>Name: {{card.name}}</h4>
          <h4>Cards Current Health : {{card.health}}</h4>
          <h4>Attack : {{card.attack}}</h4>
          <h4> Defense : {{card.defense}}</h4>
            
           </div>
       </div>
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
