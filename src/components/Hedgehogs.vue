<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="hedgehog in hedgehogs">
        <v-card data-cy="hedgehogEntry">
          <v-responsive>
            <v-img :src="hedgehog.image"></v-img>
          </v-responsive>

          <v-card-text>
            <div class="title my-5">{{ hedgehog.name }}</div>

            <div class="subheading">Description</div>
              {{ hedgehog.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" dark @click="favoriteHedgehog(hedgehog)"
                >good</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Hedgehogs",
  computed: {
    hedgehogs() {
      return this.$store.state.hedgehogs;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    favoriteHedgehog(item) {
      if (this.isAuthenticated) {
        this.$store.dispatch('addFavolite', item);
      } else {
        this.$router.push('/sign-in');
      }
    }
  }
};
</script>

<style scoped>
</style>
