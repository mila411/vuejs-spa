<template>
  <v-container>
    <v-layout column>
      <h1 class="title my-3">My Hedgehogs</h1>
      <div
        v-for="(item, idx) in userFavolites"
        class="subheading mb-2"
        :key="idx"
      >
        {{ item }}
      </div>
      <v-flex mt-4>
        <v-btn color="primary" to="/menu">Go To Menu</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  computed: {
    userFavolites() {
      return this.$store.state.userFavolites;
    }
  },
  mounted() {
    this.getFavolites();
  },
  methods: {
    getFavolites() {
      this.$store.dispatch('getUserFavolites');
    }
  }
};
</script>

<style scoped></style>
