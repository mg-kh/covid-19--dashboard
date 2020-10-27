import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import './registerServiceWorker'

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const prod = process.env.NODE_ENV === "production";
const shouldSW = "serviceWorker" in navigator && prod;
if (shouldSW) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker Registered!");
  });
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
