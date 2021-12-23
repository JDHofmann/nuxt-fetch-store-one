<template>
  <div>
    <li>{{ title }}</li>
  </div>
</template>

<script>
export default {
  name: "Listitem",
  props: {
    title: {
      type: String,
      default: "Fallback string",
    },
  },
};
</script>

<style scoped>
li {
  border: 2px solid #10c060;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
}
</style>
