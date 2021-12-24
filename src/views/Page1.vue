<template>
  <div>
    <Bar />
    <Clock />
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import Clock from "../components/Clock.vue";

export default {
  name: "Page1",
  components: {
    Bar,
    Clock,
  },
};
</script>
