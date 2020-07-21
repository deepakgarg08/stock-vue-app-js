<template>
    <!--    <div class="col-sm-6 col-md-6">-->
    <div class="panel panel-info">
        <div class="panel-heading panel-color">
            <h3 class="panel-title">
                {{stock.name}}
                <small>(price :{{stock.price}} | Quantity : {{stock.quantity}})</small>
            </h3>
        </div>

        <div class="panel-body">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model="quantity"
                       :class="{danger : insufficientQuantity}">
            </div>
            <div class="pull-right">
                <!--                :disabled="quantity <=0 || !Number.isInteger(quantity)"-->
                <button class="btn btn-success" @click="sellStock() " :disabled="insufficientQuantity || quantity <=0">
                    {{insufficientQuantity ? 'not enough Stocks' : 'Sell'}}

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
    import {mapActions} from "vuex";

    export default {
        //using another dispatching method inspite of using dispatch
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity

            }
        },
        methods: {
            //dispatch replacement
            ...mapActions({
                placesellOrder: "sellStock"
            }),

            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placesellOrder(order)
                // this.$store.dispatch('sellStock', order)
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