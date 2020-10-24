<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1
          :class="{
            'indigo--text': modeState,
            'white--text': !modeState,
          }"
          class="text-center text-h6 text-md-h3 text-sm-h4"
        >
          Explore Covid-19 Statistics Around The World!.
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <map-chart></map-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MapChart from "@/plugins/vue-map-chart";
// import { getCode, getName } from "@/plugins/country";
export default {
  data() {
    return {
      isLoading: false,
      fakeLoader: 36,
    };
  },
  components: {
    MapChart,
  },
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
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
