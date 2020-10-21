<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="tip in tips" :key="tip.id">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="3">
                <v-img class="rounded" :src="tip.image_url"></v-img>
              </v-col>
              <v-col cols="9">
                <v-card-title class="text-subtitle-2">
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
      form_type: "edit",
      tips: [],
      isAuth: false,
    };
  },
  components: {
    TipsForm,
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
