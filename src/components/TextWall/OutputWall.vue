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
  display: inline-block;
  width: 1500px;
  vertical-align: top;
  margin-left: 20px;
}

.output-text {
  color: #000;
  font-family: "Qwitcher Grypen", cursive;
  font-size: 50px;
  white-space: pre-line;
}
</style>
