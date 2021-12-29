<template>
  <div class="input-box">
    <label class="label" for="textInput">Type something here!</label>
    <textarea
      class="text-input"
      type="text"
      id="textInput"
      name="textInput"
      rows="10"
      cols="35"
      @input="handleChange($event.target.value)"
    />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "InputWall",

  methods: {
    handleChange: _.debounce(function (inputValue) {
      this.$emit("user-input", inputValue);
    }, 1000),
  },
};
</script>

<style scoped>
.input-box {
  margin: 40px 10px 40px 20px;
  width: 275px;
  display: inline-block;
}

.label {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: right;
}

.text-input {
  resize: none;
  border: solid 2px #505050;
  border-radius: 10px;
  padding: 5px;
}
</style>
