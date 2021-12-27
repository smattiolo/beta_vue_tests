<template>
  <div class="output-container">
    <p class="output-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "OutputWall",

  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.output-container {
  width: 1500px;
  position: relative;
  top: 50px;
  left: 30px;
}

.output-text {
  color: #000;
  font-family: "Qwitcher Grypen", cursive;
  font-size: 50px;
}
</style>
