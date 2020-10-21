<template>
  <v-container>
    <v-row v-if="isLoading">
      <v-col cols="12">
        <h1 class="text-md-h3 font-italic text--secondary">
          {{ countryData.country }}
        </h1>
        <h3 class="text-subtitle-2 font-italic">
          {{ countryData.day }} နေ့အထိ
        </h3>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-card>
          <template>
            <v-sheet class="pa-3">
              <v-skeleton-loader
                max-width="300"
                type="sentences"
              ></v-skeleton-loader>
            </v-sheet>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="isLoading" class="mb-7">
      <v-col cols="12">
        <v-alert text outlined color="deep-orange" icon="mdi-fire">
          <h3 class="text-subtitle-1">
            အသစ်တွေ့ရှိမှု ({{ countryData.new }}) ဉီး
          </h3>
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-card>
          <template>
            <v-sheet class="pa-3">
              <v-skeleton-loader
                max-width="300"
                type="list-item-avatar"
              ></v-skeleton-loader>
            </v-sheet>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="isLoading">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/X4pO9rD.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            ပိုးတွေ့
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.active }}) ဉီး</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/rf2Gcfo.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            ပြန်လည်သက်သာ
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.recovered }}) ဉီး</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/ZEhZZs9.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            သေဆုံး
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.dead }}) ဉီး</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/fdK8rNW.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            စုစုပေါင်း
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.total }}) ဉီး</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/Vrzt1oi.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            ရောဂါပြင်းထန်သူ
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.critical }}) ဉီး</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/10Qu5AO.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            စစ်ဆေးမှုပေါင်း
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ countryData.test }}) ခု</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center rounded-xl mb-10" light>
          <div class="img__container rounded-xl elevation-3">
            <v-img width="70px" src="https://i.imgur.com/RuN3vTK.png"> </v-img>
          </div>
          <v-card-title class="pt-14 justify-center indigo--text">
            စုစုပေါင်း/လူဉီးရေ(အချိုး)
          </v-card-title>
          <v-card-text>
            <p class="text-h6 green--text">({{ totalPopRatio }}) %</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="fakeLoad in fakeLoader"
        :key="fakeLoad"
      >
        <v-card>
          <template>
            <v-sheet class="pa-3">
              <v-skeleton-loader
                max-width="300"
                type="text , chip"
              ></v-skeleton-loader>
            </v-sheet>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      dialog: false,
      fakeLoader: 6,
    };
  },
  computed: {
    countryData() {
      return this.$store.getters.eachCountryData;
    },
    totalPopRatio() {
      let total = this.countryData.total;
      let pop = this.countryData.population;
      let ratio = 100 * (total / pop);
      return ratio.toFixed(3);
    },
  },
  watch: {
    countryData(val) {
      if (val == null) {
      } else {
        this.isLoading = true;
      }
      console.log(this.countryData);
    },
  },
};
</script>

<style lang="scss" scoped>
.img__container {
  position: absolute;
  top: -30%;
  background: white;
  padding: 10px;
  left: 50%;
  transform: translate(-50%);
}
</style>
