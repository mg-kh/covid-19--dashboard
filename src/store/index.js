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
    countries: null,
    eachCountryData: null,
    overViewCountryData: {},
  },
  getters: {
    eachCountryData(state) {
      return state.eachCountryData;
    },
    countyLists(state) {
      return state.countries;
    },
    overViewCountryData(state) {
      return state.overViewCountryData;
    },
  },
  mutations: {
    setOverViweData(state, data) {
      state.overViewData = data[0];
      state.overViewLoading = true;
    },
    eachCountryData(state, datas) {
      let data = datas[0];
      let dataPack = {
        active: data.cases.active,
        recovered: data.cases.recovered,
        total: data.cases.total,
        new: data.cases.new,
        critical: data.cases.critical,
        dead: data.deaths.total,
        population: data.population,
        country: data.country,
        test: data.tests.total,
        time: data.time,
        day: data.day,
      };
      state.eachCountryData = dataPack;
    },
    overviewCountryData(state, datas) {
      let countryDataObj = {
        total: datas.cases.total,
        population: datas.population,
        country: datas.country,
      };
      state.overViewCountryData = countryDataObj;
    },
    getCountryLists(state, countries) {
      state.countries = countries;
      state.countryLoading = true;
    },
  },
  actions: {
    fetchData({ commit }) {
      this.state.overViewLoading = false;
      let country = router.history.current.params.country;
      let date = router.history.current.params.date;
      let url;

      date == null
        ? (url = `/statistics?country=${country}`)
        : (url = `/history?country=${country}&day=${date}`);

      axios({
        baseURL,
        url,
        method: "get",
        headers,
      })
        .then((resp) => {
          // console.log(resp.data.response[0]);
          commit("setOverViweData", resp.data.response);
          commit("eachCountryData", resp.data.response);
        })
        .catch((resp) => {
          let defaultData = [
            {
              cases: {
                active: 0,
                recovered: 0,
                total: 0,
              },
              deaths: {
                total: 0,
              },
            },
          ];
          commit("setOverViweData", resp.data.response);
        });
    },

    getoverViewCountryData({ commit }, country) {
      axios({
        baseURL,
        url: "/statistics",
        params: {
          country,
        },
        method: "get",
        headers,
      })
        .then((resp) => {
          commit("overviewCountryData", resp.data.response[0]);
        })
        .catch((resp) => {
          let defaultData = [
            {
              cases: {
                active: 0,
                recovered: 0,
                total: 0,
              },
              deaths: {
                total: 0,
              },
            },
          ];
          commit("setOverViweData", resp.data.response);
        });
    },

    getCountryLists({ commit }) {
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
