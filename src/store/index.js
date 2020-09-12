import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index.js";

Vue.use(Vuex);

const headers = {
  "x-rapidapi-host": "covid-193.p.rapidapi.com",
  "x-rapidapi-key": "fff7b32541mshfa1aec113bedc18p1c2e40jsn8c8a4d80369d",
};

const baseURL = "https://covid-193.p.rapidapi.com/";

export default new Vuex.Store({
  state: {
    overViewData: "",
    overViewLoading: false,
    countryLoading: false,
    countries: "",
  },
  getters: {
    loading(state) {
      return state.overViewLoading;
    },
    countryLoading(state) {
      return state.countryLoading;
    },
    getOverviewData(state) {
      return state.overViewData;
    },
    countyLists(state) {
      return state.countries;
    },
  },
  mutations: {
    setOverViweData(state, data) {
      state.overViewData = data[0];
      state.overViewLoading = true;
    },
    getCountryLists(state, countries) {
      state.countries = countries;
      state.countryLoading = true;
    },
  },
  actions: {
    fetchData({
      commit
    }) {
      this.state.overViewLoading = false;
      let country = router.history.current.params.country;

      axios({
        baseURL,
        url: `/statistics?country=${country}`,
        method: 'get',
        headers
      }).then((resp) => {
        commit('setOverViweData', resp.data.response);
      })
    },

    getCountryLists({
      commit
    }) {
      axios({
        baseURL,
        url: "/countries",
        method: "get",
        headers,
      }).then((resp) => {
        commit("getCountryLists", resp.data.response);
      });
    },
  },
  modules: {},
});