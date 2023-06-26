<template>
  <div
    @click="fire"
    :class="filter + ' filter-item'"
    :style="{ backgroundImage: `url(${uploadImg})` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    fire() {
      // main.js에서 전역으로 선언한 emitter 변수
      // this.emitter.emit('작명', '데이터');
      this.emitter.emit("addFilter", this.filter);
    },
  },
  props: {
    uploadImg: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>