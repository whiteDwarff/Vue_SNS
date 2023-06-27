<template>
  <div class="wrap">
    <div v-if="pageState == 0">
      <Post
        v-for="(list, i) in data"
        :key="i"
        :list="list"
        @click="likeHandler(i)"
      />
    </div>
    <!-- 이미지의 필터 바꾸기 -->
    <div v-else-if="pageState == 1">
      <div
        :class="filterName + ' upload-image'"
        :style="{ backgroundImage: `url(${uploadImg})` }"
      ></div>
      <div class="filters">
        <Filter
          v-for="(filter, i) in filter"
          :key="i"
          :filter="filter"
          @click="addFilter(filter)"
        >
          <span style="color: black">{{ filter }}</span>
        </Filter>
      </div>
    </div>
    <!-- 게시글 작성 -->
    <div v-else-if="pageState == 2">
      <div
        :class="filterName + ' upload-image'"
        :style="{ backgroundImage: `url(${uploadImg})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="submit($event.target.value)"
          placeholder="write here!"
        ></textarea>
      </div>
    </div>

    <div v-else-if="pageState == 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import Post from "./PostVue.vue";
import Filter from "./FilterBox.vue";
import MyPage from "./MyPage.vue";
import { mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations(["likeHandler", "addFilter"]),
    submit(content) {
      return this.$store.commit("submit", content);
    },
  },
  computed: {
    ...mapState([
      "data",
      "filter",
      "pageState",
      "uploadImg",
      "filterName",
      "content",
    ]),
  },
  components: {
    Post,
    Filter,
    MyPage,
  },
  props: {},
};
</script>

<style>
.wrap {
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: #f00;
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