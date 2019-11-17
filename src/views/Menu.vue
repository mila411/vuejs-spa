<template>
  <div>
    <home-plans></home-plans>
    <hedgehogs></hedgehogs>
  </div>
</template>

<script>
import HomePlans from "@/components/HomePlans";
import Hedgehogs from "@/components/Hedgehogs";

export default {
  name: "Menu",
  components: {
    HomePlans,
    Hedgehogs
  }
};
</script>
<style scoped>
</style>
