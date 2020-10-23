<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <cube-button @click="showDialog">show dialog</cube-button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { query } from "@api/user";
export default {
  name: "App",
  components: {},
  methods: {
    showDialog() {
      this.$createDialog({
        type: "alert",
        title: "Alert",
        content: "dialog content",
      }).show();
      query();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
