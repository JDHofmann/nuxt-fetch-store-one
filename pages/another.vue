<template>
  <div class="container">
    <h1>Different Page</h1>
    <ul>
      <Listitem v-for="(title, i) in titles" :key="i" :title="title.title" />
    </ul>
    <p>test: {{ get_titles.title }}</p>
  </div>
</template>

<script>
// mapState helps shorten syntx from this.$store.state....
import { mapState, mapGetters } from "vuex";
import Listitem from "@/components/Listitem";

export default {
  name: "Another",
  components: {
    Listitem,
  },

  computed: {
    ...mapState(["titles", "get_titles"]),
    ...mapGetters(["get_titles"]),
  },
  mounted() {
    console.log("mounted: ", this.titles);
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
