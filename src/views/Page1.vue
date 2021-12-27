<template>
  <div>
    <Bar />
    <Clock :time="time" @new-time="updateTime" />
    <RedLine :time="time" />
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import Clock from "../components/Clock.vue";
import RedLine from "../components/RedLine.vue";

export default {
  name: "Page1",

  components: {
    Bar,
    Clock,
    RedLine,
  },

  data() {
    return {
      time: "waiting...",
    };
  },

  methods: {
    updateTime(newTime) {
      this.time = newTime;
    },
  },
};
</script>
