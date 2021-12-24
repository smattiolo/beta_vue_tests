<template>
  <div id="app">
    <Stripe />
    <div id="nav">
      <router-link to="/">Page1</router-link> --
      <router-link to="/page2">Page2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Stripe from "./components/Stripe.vue";

export default {
  components: {
    Stripe,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
