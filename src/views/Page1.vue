<template>
  <div>
    <div>
      <Bar />
      <Clock :time="time" @new-time="updateTime" />
      <RedLine :time="time" />
    </div>
    <div>
      <InputWall @user-input="writeOutput" />
      <OutputWall :text="outputText" />
    </div>
    <div>
      <BasicInput />
    </div>
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import Clock from "../components/Clock/Clock.vue";
import RedLine from "../components/Clock/RedLine.vue";
import InputWall from "../components/TextWall/InputWall.vue";
import OutputWall from "../components/TextWall/OutputWall.vue";
import BasicInput from "../components/BasicInput.vue";

export default {
  name: "Page1",

  components: {
    Bar,
    Clock,
    RedLine,
    InputWall,
    OutputWall,
    BasicInput,
  },

  data() {
    return {
      time: "waiting...",
      outputText: "",
    };
  },

  methods: {
    updateTime(newTime) {
      this.time = newTime;
    },

    writeOutput(input) {
      this.outputText = input;
    },
  },
};
</script>
