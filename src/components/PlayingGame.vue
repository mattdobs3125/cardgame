<template>
<div>
    <h1>{{pCard }}</h1>
    <h1>{{aCard}}</h1>
    <h1>{{adversary}}</h1>
    <h1>{{player}}</h1>
    <button@click="fight()">Fight!!!</button>

</div>
</template>
<script>
export default {

name:"playingGame",
computed:{
    aCard(){
        return this.$store.state.adversaryCard
    },
    pCard(){
        return this.$store.state.playerCard
    },
    player(){
        return this.$store.state.player.id
    },
    adversary(){
        return this.$store.state.adversary.id
    },
    game(){
        return this.$store.state.game.id
    }
},

methods:{
    fight(){
        let battle = {
            playerId : this.player,
            playerCardId : this.pCard,
            opponentId : this.adversary,
            opponentCardId : this.aCard
        };
        this.$store.dispatch('fight',battle)
    }

}

    
}
</script>
<style scoped>

</style>