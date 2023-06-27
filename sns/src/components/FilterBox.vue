<template>
  <div
    :class="filter + ' filter-item'"
    :style="{ backgroundImage: `url(${uploadImg})` }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["uploadImg"]),
  },
  props: {
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