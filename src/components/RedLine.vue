<template>
  <div class="red-line" :style="{ width: len }"></div>
</template>

<script>
export default {
  name: "RedLine",
  data() {
    return { len: "8px" };
  },
  props: {
    time: {
      type: String,
    },
  },
  watch: {
    time: function () {
      const seconds = parseInt(this.time.slice(-2));

      const pixels = seconds * 5 + 8;

      this.len = pixels + "px";
    },
  },
};
</script>

<style scoped>
.red-line {
  height: 8px;
  background-color: #ab0000;
  border-radius: 10px;
  position: absolute;
  right: 30px;
  top: 210px;
}
</style>
