<template>
    
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("getPlayers");
    },
    computed{
        player(){
            return this.$store.state.player;
        }
    },
    
    methods:{
        setPlayer(player){
            this.$store.dispatch("setPlayer", player)
        }


    }
};
</script>
