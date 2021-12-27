<template>
  <div>
    <Bar />
    <Clock :time="time" @new-time="updateTime" />
    <RedLine :time="time" />
    <InputWall @user-input="writeOutput" />
    <OutputWall :text="outputText" />
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import Clock from "../components/Clock.vue";
import RedLine from "../components/RedLine.vue";
import InputWall from "../components/InputWall.vue";
import OutputWall from "../components/OutputWall.vue";

export default {
  name: "Page1",

  components: {
    Bar,
    Clock,
    RedLine,
    InputWall,
    OutputWall,
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
