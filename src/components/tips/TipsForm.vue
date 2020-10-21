<template>
  <div>
    <template v-if="form_type === 'add'">
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green darken-1"
              class="add__tips__btn"
              dark
              v-bind="attrs"
              v-on="on"
              fab
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card>
              <v-card-title>
                အကြံပြုချက်များထည့်သွင်းရန်။
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form @submit.prevent="addTips">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="အကြံပြုချက်များ"
                          v-model="formData.tips"
                        ></v-text-field>
                        <v-text-field
                          label="ပုံထည့်ရန်"
                          v-model="formData.image_url"
                        ></v-text-field>
                        <v-btn type="submit" dark class="blue lighten-3"
                          >ထည့်ပါ</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-card>
        </v-dialog>
      </div>
    </template>

    <template v-if="form_type === 'edit'">
      <div class="d-inline">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="info" dark v-bind="attrs" v-on="on">
              Edit
            </v-btn>
          </template>

          <v-card>
            <v-card>
              <v-card-title>
                အကြံပြုချက်များ ပြင်ဆင်ရန်။
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form @submit.prevent="editTip">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="အကြံပြုချက်များ"
                          v-model="formData.tips"
                        ></v-text-field>
                        <v-text-field
                          label="ပုံထည့်ရန်"
                          v-model="formData.image_url"
                        ></v-text-field>
                        <v-btn type="submit" dark class="blue lighten-3"
                          >ပြင်ဆင်ပါ</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
import { db } from "@/plugins/firebase";
export default {
  props: {
    form_type: {
      type: String,
      default: "add",
    },
    tip: {
      type: Object,
      default: () => {
        return {
          tips: "",
          image_url: "",
        };
      },
    },
  },
  data() {
    return {
      dialog: false,
      formData: {
        tips: this.$props.tip.tips,
        image_url: this.$props.tip.image_url,
      },
      isAuth: false,
    };
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
  methods: {
    addTips() {
      db.collection("tips")
        .add(this.formData)
        .then((resp) => {
          //Clear Form Data
          for (let prop in this.formData) {
            this.formData[prop] = "";
          }

          //close dialog
          this.dialog = false;
        });
    },

    editTip() {
      // console.log(this.$props.tip.id);
      db.collection("tips")
        .doc(this.$props.tip.id)
        .update(this.formData)
        .then(() => {
          for (let prop in this.formData) {
            this.formData[prop] = "";
          }
          this.dialog = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.add__tips__btn {
  position: fixed !important;
  bottom: 10%;
  right: 5%;
}
</style>
