<template>
  <v-row>
    <v-autocomplete
      v-model="brand"
      :items="brands"
      item-text="name"
      item-value="id"
    >
    </v-autocomplete>
    <v-autocomplete
      v-model="problemadvise"
      :items="problemadvises"
      item-text="name"
      item-value="id"
    >
    </v-autocomplete>

    <!-- <v-text-field></v-text-field>
        <v-text-field></v-text-field> -->
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      brand: 0,
      brands: [],
      problemadvise: 0,
      problemadvises: [],
    };
  },
  created() {
    this.getAllProblem();
    this.getAllProblemAdvise();
  },
  methods: {
    async getAllProblem() {
      const response = await this.axios.get("/brands");

      this.brands = response.data.data;
      // console.log("response", response.data.data);
    },
    async getAllProblemAdvise() {
      const response = await this.axios.get(`/problemAdviseById?problemId=${this.brand}`);

      this.brands = response.data.data;
      // console.log("response", response.data.data);
    },
  },
};
</script>