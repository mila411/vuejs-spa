<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-btn class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn text to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
        <v-btn color="brown lighten-3" to="/join" class="nav-join" data-cy="joinBtn">JOIN</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/about">PROFILE</v-btn>
        <v-btn outline color="gray" @click="logout" data-cy="logout">Logout</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "HedgeHogs 🦔 ",
      drawer: false,
      items: [
        { title: "Menu" },
        { title: "Profile" },
        { title: "Sign In" },
        { title: "Join" }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.router-link-exact-active {
  color: white;
  text-decoration: none;
}
.v-toolbar__title {
  color: white;
  text-decoration: none;
}
</style>
