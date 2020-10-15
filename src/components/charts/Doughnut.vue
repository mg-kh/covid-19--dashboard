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
      return this.$store.getters.eachCountryData;
    },
  },
  watch: {
    doughnutData(val) {
      let dougData = [val.total, val.active, val.recovered, val.dead];
      console.log(val);
      console.log(dougData);
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
