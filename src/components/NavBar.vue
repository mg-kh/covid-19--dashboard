<template>
  <div>
    <v-app-bar app color="blue-grey darken-1" dark>
      <v-toolbar-title class="font-weight-light"
        >Corona <span class="font-weight-bold">Dashboard</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn color="blue-grey darken-3" dark @click.prevent="getCountryLists">
        <v-icon left dark>mdi-web</v-icon>
        Search
      </v-btn>
    </v-app-bar>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-title class="headline font-weight-light"
            >Search By
            <span class="font-weight-regular pl-2">Country</span></v-card-title
          >

          <v-card-text class="pb-0">
            <v-select
              v-if="countryLoading"
              :items="countyLists"
              label="select country"
              v-model="country"
            ></v-select>
            <v-card v-else elevation="0">
              <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
            </v-card>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="blue-grey darken-1 white--text"
              text
              @click="searchByCountry"
            >
              Search
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      country: "",
    };
  },
  computed: {
    countryLoading() {
      return this.$store.getters.countryLoading;
    },
    countyLists() {
      return this.$store.getters.countyLists;
    },
  },
  methods: {
    getCountryLists() {
      this.dialog = true;
      this.$store.dispatch("getCountryLists");
    },
    searchByCountry() {
      this.dialog = false;
      this.$router.push({
        name: "Statistics",
        params: {
          country: this.country,
        },
      });
      this.$store.dispatch("fetchData");
    },
  },
};
</script>
