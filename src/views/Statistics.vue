<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1
          class="font-weight-light grey--text font-italic font-weight-bold"
          v-if="overviewData"
        >
          {{ overviewData.country }}
        </h1>
      </v-col>
    </v-row>

    <router-view></router-view>

    <v-row v-if="loading">
      <overview-card
        :cols="12"
        :sm="3"
        :color="'white'"
        :title="'Active'"
        :number="overviewData.cases.active"
      ></overview-card>
      <overview-card
        :cols="6"
        :sm="3"
        :color="'white'"
        :title="'Recover'"
        :number="overviewData.cases.recovered"
      ></overview-card>
      <overview-card
        :cols="6"
        :sm="3"
        :color="'white'"
        :title="'Death'"
        :number="overviewData.deaths.total"
      ></overview-card>
      <overview-card
        :cols="12"
        :sm="3"
        :color="'white'"
        :title="'Total'"
        :number="overviewData.cases.total"
      ></overview-card>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import OverviewCard from "@/components/OverviewCard";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      data: "",
    };
  },
  components: {
    OverviewCard,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    overviewData() {
      return this.$store.getters.getOverviewData;
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.test();
  },
  watch: {
    overviewData: function(val) {
      if (val) {
        // this.drawcharts();
      }
    },
  },
  methods: {
    fetchData() {
      let country = this.$route.query.country;
      this.$store.dispatch("fetchData", country);
    },
    test() {
      console.log(this.$route);
    },
  },
};
</script>
