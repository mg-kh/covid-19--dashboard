<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn v-if="isAuth" @click.prevent="logout">Logout</v-btn>
        <v-btn v-else @click.prevent="login">Login with Google</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth, provider } from "@/plugins/firebase";
export default {
  data() {
    return {
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
    login({ commit }) {
      auth.signInWithPopup(provider).then(function(resp) {
        console.log(resp);
      });
    },
    logout({ commit }) {
      auth.signOut().then((resp) => {
        console.log("signout");
      });
    },
  },
};
</script>
