<template>
  <div class="container">
    <h1>Store Test App</h1>
    <ul>
      <Listitem v-for="(title, i) in titles" :key="i" :title="title.title" />
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
const url = "https://www.progressive.com/lifelanes/wp-json/wp/v2/posts";
import titles from "~/static/data2.json";

// mapState helps shorten syntx from this.$store.state....
import { mapState, mapActions } from "vuex";
import Listitem from "@/components/Listitem";

export default {
  name: "IndexPage",
  components: {
    Listitem,
  },

  computed: {
    ...mapState(["titles"]),
  },
  methods: {
    ...mapActions(["getTitles"]),
  },
  asyncData({ params, store }) {
    store.commit("SET_TITLES", { titles });
    return { titles };
  },
  // async asyncData({ store }) {
  //   const response = await axios.get(url);
  //   const data = response.data;
  //   const titles = data.map(({ title }) => title.rendered);
  //   // return { titles };
  //   store.commit("SET_TITLES", titles);
  // },

  // created runs on server side
  created() {
    console.log("created: ", this.titles);
    // work around to avoid
    // this.getTitles();
    // this.getTitles();
  },

  // mounted runs on client side
  mounted() {
    console.log("mounted: ", this.titles);
    // you can alter the data on client side within this method
    // this.titles = ["Title One", "Title Two", "Title Three"];
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: #107060;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
