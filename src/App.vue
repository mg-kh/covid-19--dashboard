<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="pb-10" :class="{ 'grey darken-2': !modeState }">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: rgb(240, 240, 240);
}
</style>
