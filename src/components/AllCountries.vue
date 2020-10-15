<template>
  <v-container>
    <v-row v-if="isLoading">
      <v-col
        cols="6"
        sm="4"
        md="3"
        v-for="country in allCountries"
        :key="country"
      >
        <v-card
          dark
          color="blue-grey darken-1"
          :to="{ name: 'Statistics', params: { country } }"
        >
          <v-card-title class="caption text-sm-subtitle-1">
            {{ country }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col
        cols="6"
        sm="4"
        md="3"
        v-for="fakeLoad in fakeLoader"
        :key="fakeLoad"
      >
        <template>
          <v-sheet class="pa-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="text"
            ></v-skeleton-loader>
          </v-sheet>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      fakeLoader: 36,
    };
  },
  computed: {
    allCountries() {
      return this.$store.getters.countyLists;
    },
  },
  watch: {
    allCountries(val) {
      if (val != null) {
        this.isLoading = true;
      }
    },
  },
  created() {
    this.getAllCountries();
  },
  methods: {
    getAllCountries() {
      this.$store.dispatch("getCountryLists");
    },
  },
};
</script>
