<template>
  <div class="bar" :style="{ width: dynamicWidth + 'px' }">
    <button class="btn plus-btn" @click="addBar">
      <p class="btn-text plus-btn-text">+</p>
    </button>

    <button class="btn minus-btn" @click="removeBar" :style="hideButton">
      <p class="btn-text minus-btn-text">-</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Bar",
  data() {
    return {
      dynamicWidth: 120,
    };
  },
  methods: {
    addBar() {
      this.dynamicWidth += 30;
    },
    removeBar() {
      if (this.dynamicWidth > 120) {
        this.dynamicWidth -= 30;
      }
    },
  },
  computed: {
    hideButton() {
      if (this.dynamicWidth === 120) {
        return { visibility: "hidden" };
      }

      return "";
    },
  },
};
</script>

<style scoped>
.bar {
  margin: 20px;
  height: 60px;
  background-color: #000;
  border-radius: 40px;
}

.btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 30px;
  position: relative;
}

.plus-btn {
  background-color: #00ab46;
  bottom: 5px;
  left: 10px;
}

.minus-btn {
  background-color: #ab0000;
  top: 14px;
  left: 15px;
}

.btn-text {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  text-align: center;
  position: relative;
}

.plus-btn-text {
  font-size: 30px;
  bottom: 33px;
}

.minus-btn-text {
  font-size: 40px;
  bottom: 52px;
}
</style>
