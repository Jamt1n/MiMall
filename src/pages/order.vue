<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";

export default {
  name: "order",
  components: {OrderHeader},
}
</script>

<style scoped>

</style>
