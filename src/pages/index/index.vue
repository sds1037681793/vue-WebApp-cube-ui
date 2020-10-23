<template>
  <div class="hello">
    <Home></Home>
    <TabBar :selectedLabelDefault='selectedLabelDefault'></TabBar>
  </div>
</template>

<script>
import TabBar from "@components/tabBar.vue";
import Home from "@components/home/index.vue";

export default {
  name: "Index",
  components: { TabBar, Home },
  data() {
    return {
      selectedLabelDefault:1
    };
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
