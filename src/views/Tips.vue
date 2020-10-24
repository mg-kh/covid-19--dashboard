<template>
  <div>
    <tip-cards></tip-cards>
    <tips-form :form_type="form_type" v-if="isAuth"></tips-form>
  </div>
</template>

<script>
// import { db } from "@/plugins/firebase";
import { auth } from "@/plugins/firebase";
import TipsForm from "@/components/tips/TipsForm";
import TipCards from "@/components/tips/TipCards";
export default {
  data() {
    return {
      tips: [],
      form_type: "add",
      isAuth: false,
    };
  },
  components: {
    TipsForm,
    TipCards,
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
  // firestore: {
  //   tips: db.collection("tips"),
  // },
};
</script>
