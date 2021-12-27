<template>
  <div class="red-line" :style="{ width: len }"></div>
</template>

<script>
export default {
  name: "RedLine",
  data() {
    return { len: "8px", accumulator: 8 };
  },
  props: {
    time: {
      type: String,
    },
  },
  watch: {
    time: function (thisTime) {
      const seconds = parseInt(thisTime.slice(-2));

      const pixels = seconds + this.accumulator;

      if (seconds === 59) {
        this.accumulator = 8;
      } else {
        this.accumulator = pixels;
      }

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
