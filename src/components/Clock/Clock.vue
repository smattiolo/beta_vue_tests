<template>
  <div class="clock-container">
    <p class="clock-text">{{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  name: "Clock",

  props: {
    time: {
      type: String,
    },
  },

  data() {
    return {
      currentTime: this.time,
    };
  },

  methods: {
    getCurrentTime() {
      setInterval(() => {
        const dateTime = new Date();
        const hours = dateTime.getHours().toString();
        const minutes = dateTime.getMinutes().toString();
        const seconds = dateTime.getSeconds().toString();

        this.currentTime =
          (hours.length === 1 ? "0" + hours : hours) +
          ":" +
          (minutes.length === 1 ? "0" + minutes : minutes) +
          ":" +
          (seconds.length === 1 ? "0" + seconds : seconds);

        this.$emit("new-time", this.currentTime);
      }, 1000);
    },
  },
  mounted() {
    this.$nextTick(this.getCurrentTime);
  },
};
</script>

<style scoped>
.clock-container {
  float: right;
  width: 100px;
  height: 60px;
  border-radius: 40px;
  background-color: #000;
  margin: -80px 20px 0 0;
}

.clock-text {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 5px 0;
  color: #fff;
}
</style>
