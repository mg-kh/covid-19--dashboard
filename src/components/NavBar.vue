<template>
  <div>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="font-weight-light"
        >Corona <span class="font-weight-bold">Dashboard</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn color="blue-grey darken-3" dark @click.prevent="getCountryLists">
        <v-icon left dark>mdi-web</v-icon>
        ရှာဖွေရန်
      </v-btn>
    </v-app-bar>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-title class="headline font-weight-light"
            >နိုင်ငံနှင်
            <span class="font-weight-regular pl-2"
              >ရက်စွဲအလိုက်</span
            ></v-card-title
          >

          <v-card-text class="pb-0">
            <v-text-field
              v-model="dateSearch"
              label="YYYY/MM/DD"
              prepend-icon="mdi-web"
              :val="getDate"
              @focus="showDatapicker = !showDatapicker"
            ></v-text-field>
            <v-date-picker
              v-if="showDatapicker"
              v-model="dateSearch"
              elevation="3"
              class="mt-4"
              min="2016-06-15"
              max="2030-12-31"
              @input="showDatapicker = !showDatapicker"
            ></v-date-picker>
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
              ရှာပါ
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
      date: false,
      country: "",
      dateSearch: "",
      showDatapicker: false,
    };
  },
  computed: {
    countryLoading() {
      return this.$store.getters.countryLoading;
    },
    countyLists() {
      return this.$store.getters.countyLists;
    },
    getDate() {
      return this.dateSearch;
    },
  },
  methods: {
    getCountryLists() {
      this.dialog = true;
      this.$store.dispatch("getCountryLists");
    },
    searchByCountry() {
      this.dialog = false;
      if (this.dateSearch == "") {
        this.$router.push({
          name: "Statistics",
          params: {
            country: this.country,
          },
        });
        this.$store.dispatch("fetchData");
      } else {
        this.$router.push({
          name: "History",
          params: {
            country: this.country,
            date: this.dateSearch,
          },
        });
        this.$store.dispatch("fetchData");
      }
    },
  },
};
</script>
