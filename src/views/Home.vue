<template>
  <div>
    <v-container>
      <v-row>
        <all-countries></all-countries>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AllCountries from "@/components/AllCountries";
export default {
  components: {
    AllCountries,
  },
};
</script>
