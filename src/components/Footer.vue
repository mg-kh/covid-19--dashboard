<template>
  <v-footer
    :class="{ indigo: modeState, 'blue-grey darken-4': !modeState }"
    fixed
    padless
    dark
  >
    <v-row justify="center" no-gutters>
      <router-link class="pa-3" :to="{ name: 'Home' }">
        <v-icon dark>mdi-home</v-icon>
      </router-link>
      <router-link
        class="pa-3"
        :to="{ name: 'Statistics', params: { country: 'myanmar' } }"
        :class="{ active: this.$route.name == 'Statistics' }"
      >
        <v-icon dark>mdi-chart-line</v-icon>
      </router-link>
      <router-link class="pa-3" :to="{ name: 'Tips' }">
        <v-icon dark>mdi-card-text-outline</v-icon>
      </router-link>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
  },
};
</script>

<style>
.active {
  background: #303f9f;
}
a {
  text-decoration: none;
}
a:hover {
  background: #303f9f;
}
</style>
