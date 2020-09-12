<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="mb-16 pb-10">
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
