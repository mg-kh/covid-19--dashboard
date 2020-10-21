<template>
  <v-footer color="indigo" fixed padless>
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
  data: () => ({}),
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
