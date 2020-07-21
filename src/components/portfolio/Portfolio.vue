<template>
    <div>
    <app-stock v-for="stock in stocks" :stock = "stock"></app-stock>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";

    //using mapGetters inspite of using getters -practice
    import {mapGetters} from "vuex";


    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        //registering locally
        components:{
            appStock : Stock
        }
    }
</script>