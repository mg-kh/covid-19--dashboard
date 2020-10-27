<template>
  <v-container>
    <v-row>
      <v-col>
        <h1
          :class="{
            'text--secondary': modeState,
            'white--text': !modeState,
          }"
          class="text-subtitle-1 text-sm-h4"
        >
          ကျန်းမာရေးဆိုင်ရာ အကြံပြုချက်များ
        </h1>
      </v-col>
    </v-row>

    <template v-if="isLoading">
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title
              class="headline grey lighten-2 text-subtitle-2 text-sm-h6"
            >
              ကျေးဇူးပြု၍ ခေတ္တစောင့်ပေးပါ...<span>&#128147;</span>
            </v-card-title>
          </v-card>
        </v-dialog>
      </div>
    </template>

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="tip in tips" :key="tip.id">
        <v-card :class="{ white: modeState, 'blue-grey darken-2': !modeState }">
          <v-container>
            <v-row>
              <v-col cols="3">
                <v-img class="rounded" :src="tip.image_url"></v-img>
              </v-col>
              <v-col cols="9">
                <v-card-title
                  class="text-subtitle-2"
                  :class="{
                    'indigo--text': modeState,
                    'indigo--text text--accent-1': !modeState,
                  }"
                >
                  {{ tip.tips }}
                </v-card-title>
                <v-card-actions v-if="isAuth">
                  <tips-form
                    :form_type="form_type"
                    :tip="tip"
                    class="mr-3"
                  ></tips-form>
                  <v-btn class="red" dark @click.prevent="deleteTips(tip.id)"
                    >Delete</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "@/plugins/firebase";
import { db } from "@/plugins/firebase";
import TipsForm from "@/components/tips/TipsForm";

export default {
  data() {
    return {
      isLoading: true,
      dialog: true,
      form_type: "edit",
      tips: [],
      isAuth: false,
    };
  },
  components: {
    TipsForm,
  },
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
  },
  watch: {
    tips(val) {
      if (val.length != 0) {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  },
  firestore: {
    tips: db.collection("tips"),
  },
  methods: {
    deleteTips(id) {
      db.collection("tips")
        .doc(id)
        .delete()
        .then(() => {
          console.log("successfully deleted!");
        });
    },
  },
};
</script>
