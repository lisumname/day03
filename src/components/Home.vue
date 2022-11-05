<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <strong>Home</strong>
    <CategoryMy></CategoryMy>
    <hr>
    <SchoolMy></SchoolMy>
  </div>
</template>

<script>
import SchoolMy from "./SchoolMy.vue";

export default {
  name: "HomeMy",
  data() {
    return {
      msg: "我是Home组件",
    };
  },
  components: { SchoolMy },
};
</script>

<style>
#home {
  color: red;
}
</style>