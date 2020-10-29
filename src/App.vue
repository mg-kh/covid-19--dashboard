<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="pb-10" :class="{ 'grey darken-2': !modeState }">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
    <template>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="150px">
            <div class="pt-6">
              Install Website ?
            </div>
            <v-btn class="my-3" color="green" @click="installWeb" dark>
              Yes
            </v-btn>
            <v-btn class="my-3" text color="grey" dark @click="sheet = !sheet">
              No
            </v-btn>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </template>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  data() {
    return {
      sheet: false,
    };
  },
  components: {
    NavBar,
    Footer,
  },
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
  },
  created() {
    let eventHandle;
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      this.sheet = false;
    } else {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        eventHandle = e;
        this.sheet = true;
      });

      this.installWeb = () => {
        eventHandle.prompt();
        this.sheet = false;
        eventHandle.userChoice.then((result) => {
          if (result.outcome == "accepted") {
            console.log("user accepted!");
          } else {
            console.log("user denied!");
          }
          eventHandle = null;
        });
      };
    }
  },
};
</script>

<style lang="scss">
#app {
  background: rgb(240, 240, 240);
}
</style>
