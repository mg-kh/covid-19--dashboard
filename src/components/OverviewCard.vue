<template>
  <v-col :cols="cols" :sm="sm">
    <v-card class="mx-auto rounded-lg" elevation="0" :color="color">
      <v-card-title
        class="font-weight-light pb-2 font-weight-bold blue-grey lighten-2 white--text"
        >{{ title }}</v-card-title
      >
      <v-chip class="ma-3" color="blue-grey lighten-2" text-color="white">
        <v-avatar left>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        {{ number }}
      </v-chip>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      required: true,
    },
    sm: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: false,
    },
  },
};
</script>
