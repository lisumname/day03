<template>
  <div id="app">
    <h1>我是App组件</h1>
    <HomeMy></HomeMy>
  </div>
</template>

<script>
import HomeMy from "./components/Home.vue";
export default {
  name: "App",
  components: {
    HomeMy,
  },
};
</script> 
<style scoped>
/* scoped属性是为了防止其他组件引进来后会通用这个style的样式 */
/* deep是深度选择器 就是让子组件们都应用这个样式  ::v-deep不会报错 /deep/老是闪红 但能用 */
::v-deep h1 {
  color: orange;
}
::v-deep strong {
  color: red;
}
</style>