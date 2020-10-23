<template>
  <div class="fotter">
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    >
    </cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          label: "",
          icon: "cubeic-home",
          value: 1,
        },
        {
          label: "",
          icon: "cubeic-add",
          value: 2,
        },
        {
          label: "",
          icon: "cubeic-person",
          value: 3,
        },
      ],
    };
  },
  props:['selectedLabelDefault'],
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      console.log(label);
      // if you clicked different tab, this methods can be emitted
    },
  },
};
</script>

<style lang="less" scope>
    .fotter{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        border-top: 1px solid #e9e9e9;
    }
</style>