<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div class="container">
            <router-link to = "/" class="navbar-brand" >Stock Trader</router-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to = "/portfolio"  class="nav-link" >Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to = "/stocks"  class="nav-link" >Stocks</router-link>
                </li>
                <li class="nav-item">
                <li class="nav-link" @click="endDay">End Day</li>

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Save & Load</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Save Data</a>
                        <a href="#" class="dropdown-item">Load Data</a>
                    </div>
                </li>
                <li class="nav-item">
                    <strong class="nav-link" >Funds : {{funds | currency}}</strong>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import  {mapActions } from 'vuex'
    export default {
        computed:{
            funds(){
                return this.$store.getters.funds
            }
        },
        methods:{
            ...mapActions([
                "randomizeStocks"
            ]),
            endDay() {
                 this.randomizeStocks()
            }
        }
    }
</script>