<template>
    <div>
        <h5>See your portfolio details</h5>
        <h5>click End to end current day</h5>
        <h5>your total funds {{funds | currency}}</h5>
    </div>

</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }

</script>