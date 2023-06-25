<template>
  <div>
    <div v-if="pageState == 0">
      <Post v-for="(list, i) in data" :key="i" :list="data[i]" />
    </div>
    <div v-else-if="pageState == 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImg})` }"
      ></div>
      <div class="filters">
        <Filter
          :uploadImg="uploadImg"
          v-for="(list, i) in filterData"
          :class="list"
          :key="i"
        />
      </div>
    </div>
    <div v-else-if="pageState == 2">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImg})` }"
      ></div>
      <div class="write">
        <textarea class="write-box" @input="submit($event.target.value)">
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./PostVue.vue";
import Filter from "./FilterBox.vue";
import filter from "../assets/filter.js";

export default {
  data() {
    return {
      filterData: [...filter],
    };
  },
  methods: {
    submit(content) {
      return this.$emit("submit", content);
    },
  },
  components: {
    Post,
    Filter,
  },
  props: {
    data: Object,
    pageState: Number,
    uploadImg: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>