<template>
  <div>
    <!-- header -->
    <div class="header">
      <ul class="header-button-left">
        <li v-if="pageState" @click="revertPageHandler">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="pageState == 1" @click="nextPageHandler">Next</li>
        <li v-if="pageState == 2" @click="uploadPosting">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <!-- con -->
    <div id="con">
      <Container @submit="content = $event" />
    </div>
    <!-- footer -->
    <div class="footer">
      <ul class="footer-button-plus">
        <input
          @change="upload"
          accept="image/*"
          type="file"
          id="file"
          class="inputfile"
        />
        <div class="button-wrap">
          <i @click="changePaging(0)" class="fas fa-infinity"></i>

          <label for="file" class="input-plus">
            <i class="fa-solid fa-plus"></i
          ></label>
          <i @click="changePaging(3)" class="fa-regular fa-user"></i>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/ContainerVue.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // vuex의 mutations에서 선언한 method를 축약하여 사용할 수 있음.
    ...mapMutations([
      "revertPageHandler",
      "nextPageHandler",
      "uploadPosting",
      "changePaging",
    ]),
    upload(e) {
      let url = URL.createObjectURL(e.target.files[0]);
      this.uploadImg = url;
      this.$store.commit("uploadImg", this.uploadImg);
    },
    now() {
      return new Date();
    },
  },
  // Vue 페이지가 로드될 때 실행 후 실행되면 값을 리턴함, 랜더링이 한번만 실행
  // ** vuex의 state에 접근가능하며, 변수를 축약하여 사용할 수 있다.
  // $store.state.data -> data로 선언 가능
  computed: {
    ...mapState(["data", "filter", "pageState"]),
  },
  components: {
    Container,
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  margin: 0 auto;
  width: 50%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 50%;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: inherit;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
.button-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
