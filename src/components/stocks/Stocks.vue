<template>
    <div class="container">
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>


</template>
<script>
    import  Stock from './Stock.vue'

    let id = 0
    export default {
        data() {
            return {
                stocks: [
                    {id: ++id, name: 'BMW', price: 110},
                        {id: ++id, name: 'Google', price: 200},
                        {id: ++id, name: 'Netflix', price: 250},
                        {id: ++id, name: 'Twitter', price: 20}
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }


</script>