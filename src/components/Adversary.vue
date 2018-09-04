<template>
    <div class="adversary row" v-if="adversary.id">
        <div class="col-md-12">

          <div v-for="card in adversary.hand" :key="card.id">
            <img v-if="!card.visible"
            :key="card.id" @click='setAdversaryCard(card.id)' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBF_hN9qKTYv-KFj2fvps1CQnU-04P1V4Adw6Wwons7uIq5m8">
           <div v-else-if="card.visible">
           <img :src="card.img" alt="" :key="card.id" @click='setAdversaryCard(card.id)' >
            {{card.name}}
            {{card.health}}
            {{card.defense}}
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
