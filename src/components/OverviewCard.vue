<template>
  <v-container>
    <v-row v-if="isLoading">
      <v-col cols="12">
        <h1 class="text-h3 font-italic text--secondary">
          {{ countryData.country }}
        </h1>
        <h3 class="font-italic">{{ countryData.day }} နေ့အထိ</h3>
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

    <v-row v-if="isLoading">
      <v-col cols="12">
        <v-alert text outlined color="deep-orange" icon="mdi-fire">
          <h3 class="text-h5">အသစ်တွေ့ရှိမှု ({{ countryData.new }}) ဉီး</h3>
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
        <v-card color="blue-grey lighten-2" dark>
          <v-card-title>
            ပိုးတွေ့
          </v-card-title>
          <v-card-text>
            <v-chip light>
              {{ countryData.active }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card color="blue-grey lighten-2" dark>
          <v-card-title>
            ပြန်လည်သက်သာ
          </v-card-title>
          <v-card-text>
            <v-chip light>
              {{ countryData.recovered }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card color="blue-grey lighten-2" dark>
          <v-card-title>
            သေဆုံး
          </v-card-title>
          <v-card-text>
            <v-chip light>
              {{ countryData.dead }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="blue-grey lighten-2" dark>
          <v-card-title>
            စုစုပေါင်း
          </v-card-title>
          <v-card-text>
            <v-chip light>
              {{ countryData.total }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card color="blue-grey lighten-2" dark>
          <v-card-title>
            ပြင်းထန်
          </v-card-title>
          <v-card-text>
            <v-chip light>
              {{ countryData.critical }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" scrollable max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" outlined dark v-bind="attrs" v-on="on">
                  နောက်ထပ်
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5"
                  >ခြုံငုံတင်ပြချက်များ</v-card-title
                >
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-col cols="12">
                    <h3 class="text-h5 mb-3">စစ်ဆေးမှုပေါင်း</h3>
                    <p class="text-subtitle-1 font-weight-bold">
                      {{ countryData.test }}
                    </p>
                  </v-col>
                  <v-divider></v-divider>
                  <v-col cols="12">
                    <h3 class="text-h5 mb-3">စုစုပေါင်း/လူဉီးရေ(အချိုး)</h3>
                    <p class="text-subtitle-1">{{ totalPopRatio }} &#37;</p>
                  </v-col>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    ပိတ်ရန်
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
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
