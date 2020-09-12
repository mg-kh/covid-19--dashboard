<script>
import { Doughnut } from "vue-chartjs";
import { opts, data } from "@/chart-options/doughnut";
export default {
  extends: Doughnut,
  data() {
    return {
      data,
      opts,
    };
  },
  computed: {
    doughnutData() {
      return this.$store.getters.getOverviewData;
    },
  },
  watch: {
    doughnutData(val) {
      let dougData = [
        val.cases.total,
        val.cases.active,
        val.cases.recovered,
        val.deaths.total,
      ];
      data.datasets[0].data = dougData;
      this.renderChart(data, opts);
    },
  },
  mounted() {
    //     this.renderChart(data, opts);
    //     this.showdata();
  },
  methods: {
    showdata() {
      alert("mounted");
    },
  },
};
</script>
