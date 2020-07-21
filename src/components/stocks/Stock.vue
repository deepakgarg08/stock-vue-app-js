<template>
    <!--    <div class="col-sm-6 col-md-6">-->
    <div class="panel panel-success">
        <div class="panel-heading panel-color">
            <h3 class="panel-title">
                {{stock.name}}
                <small>(price :{{stock.price}})</small>
            </h3>
        </div>

        <div class="panel-body">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class = "{danger : insufficientFunds }">
            </div>
            <div class="pull-right">
<!--                :disabled="quantity <=0 || !Number.isInteger(quantity)"-->
                <button class="btn btn-success" @click="buyStocks()" :disabled="insufficientFunds || quantity <=0">
                    {{insufficientFunds ? 'insufficientFunds' : 'Buy'}}
                </button>
            </div>
        </div>

        <br/>
        <br/>

    </div>

    <!--    </div>-->
</template>

<style scoped>
     .danger {
         border: 1px solid red;
     }
</style>


<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds
            },
            insufficientFunds(){
                return this.quantity *  this.stock.price > this.funds
            }
        },
        methods: {
            buyStocks() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity

                }
                console.log('check order', order)
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>


<style>
    .panel-color {
        color: #50955b;
        background: #bad2b1;
    }
</style>