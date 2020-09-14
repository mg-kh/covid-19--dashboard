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

    <v-row v-if="loading">
      <overview-card
        v-for="data in statisticData"
        :key="data.name"
        :cols="data.cols.col"
        :sm="data.cols.sm"
        :color="data.color"
        :title="data.title"
        :number="data.number"
      ></overview-card>
    </v-row>
    <v-row v-else>
      <v-col cols="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-skeleton-loader
            type="list-item-two-line , card-heading"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4">
        <div class="chart__container">
          <doughnut-chart></doughnut-chart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import OverviewCard from "@/components/OverviewCard";
import DoughnutChart from "@/components/charts/Doughnut";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      statisticData: "",
    };
  },
  components: {
    OverviewCard,
    DoughnutChart,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    overviewData() {
      return this.$store.getters.getOverviewData;
    },
  },
  watch: {
    overviewData(val) {
      let statisticsData = [
        {
          title: "Active",
          cols: {
            col: 12,
            sm: 3,
          },
          color: "white",
          number: val.cases.active,
        },
        {
          title: "Recover",
          cols: {
            col: 6,
            sm: 3,
          },
          color: "white",
          number: val.cases.recovered,
        },
        {
          title: "Death",
          cols: {
            col: 6,
            sm: 3,
          },
          color: "white",
          number: val.deaths.total,
        },
        {
          title: "Total",
          cols: {
            col: 12,
            sm: 3,
          },
          color: "white",
          number: val.cases.total,
        },
      ];
      this.statisticData = statisticsData;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchData");
    },
  },
};
</script>

<style>
.chart__container {
  position: relative;
  min-width: 400px;
  min-height: 400px;
  margin: 0 auto;
}
</style>
