<template>
  <div>
    <v-app-bar
      app
      :class="{ indigo: modeState, 'blue-grey darken-4': !modeState }"
      dark
    >
      <v-toolbar-title class="font-weight-light">
        Corona <span class="font-weight-bold">Dashboard</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-switch
        append-icon="mdi-weather-sunny"
        prepend-icon="mdi-brightness-4"
        v-model="night_switch"
        hide-details
        @change="nightSwitch"
      ></v-switch>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      night_switch: true,
    };
  },
  computed: {
    modeState() {
      return this.$store.getters.getModeState;
    },
  },
  methods: {
    nightSwitch() {
      this.$store.commit("nightSwitcher", this.night_switch);
    },
  },
};
</script>
