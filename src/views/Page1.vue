<template>
  <div>
    <HelloWorld msg="alpha beta gamma delta epsilon" />
    <Bar />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Bar from "../components/Bar.vue";

export default {
  name: "Page1",
  components: {
    HelloWorld,
    Bar,
  },
};
</script>
