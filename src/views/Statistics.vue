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
      <v-col cols="12">
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
      statisticData: "",
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
  watch: {
    overviewData(val) {
      console.log(val);
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
          number: val.deths,
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
  mounted() {
    this.test();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchData");
    },
    test() {
      // console.log(this.$route);
    },
  },
};
</script>
