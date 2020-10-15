<template>
  <v-container>
    <v-row>
      <overview-card></overview-card>
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
  components: {
    OverviewCard,
    DoughnutChart,
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
  min-width: 300px;
  min-height: 300px;
  margin: 0 auto;
}
</style>
