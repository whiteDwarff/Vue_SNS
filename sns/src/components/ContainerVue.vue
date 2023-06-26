<template>
  <div class="wrap">
    {{ $store.pageState }}
    <div v-if="$store.state.pageState == 0">
      <Post
        v-for="(list, i) in $store.state.data"
        :key="i"
        :list="list"
        @click="$store.commit('likeHandler', i)"
      />
    </div>
    <!-- 이미지의 필터 바꾸기 -->
    <div v-else-if="$store.state.pageState == 1">
      <div
        :class="$store.state.filterName + ' upload-image'"
        :style="{ backgroundImage: `url(${$store.state.uploadImg})` }"
      ></div>
      <div class="filters">
        <Filter
          v-for="(filter, i) in $store.state.filter"
          :key="i"
          :filter="filter"
          @click="$store.commit('addFilter', filter)"
        >
          <span style="color: black">{{ filter }}</span>
        </Filter>
      </div>
    </div>
    <!-- 게시글 작성 -->
    <div v-else-if="$store.state.pageState == 2">
      <div
        :class="$store.state.filterName + ' upload-image'"
        :style="{ backgroundImage: `url(${$store.state.uploadImg})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="submit($event.target.value)"
          placeholder="write here!"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./PostVue.vue";
import Filter from "./FilterBox.vue";

export default {
  methods: {
    submit(content) {
      return this.$store.commit("submit", content);
    },
  },
  components: {
    Post,
    Filter,
  },
  props: {
    pageState: Number,
  },
};
</script>

<style>
.wrap {
  width: 50%;
  margin: 0 auto;
}
.upload-image {
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-size: cover; */
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 100px;
}
.filter-1 {
  width: 100px;
  height: 100px;
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
  border: 1px solid rgb(35, 35, 35);
  resize: none;
  width: calc(100% - 10px);
  height: 200px;
  padding: 0 5px;
  margin: 100px auto 0 auto;
  display: block;
  outline: none;
}
</style>