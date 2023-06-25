<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li v-if="pageState" @click="pageState -= 1">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="pageState == 1" @click="pageState += 1">Next</li>
        <li v-if="pageState == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container
      :data="data"
      :pageState="pageState"
      :uploadImg="uploadImg"
      @submit="content = $event"
    />

    <!-- <button @click="more">더보기</button> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <!-- accept="" 사용자가 이미지 파일만 선택하게 제한을 줄 수 있다. -->
        <input
          @change="upload"
          accept="image/*"
          type="file"
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/ContainerVue.vue";
import data from "./assets/theme.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      data,
      count: 0,
      pageState: 0,
      uploadImg: "",
      content: "",
    };
  },
  methods: {
    more() {
      // axios.post('url', {name : 'kang'}), 서버에 데이터 전송
      // then() : 성공 시 실행, catch() : 실패 시 실행
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((res) => {
          this.data.push(res.data);
          this.count++;
        });
    },
    upload(e) {
      // upload한 파일이 담겨있음, 기본형식은 fileList지만 indexing이 가능함.
      // file[0]으로 선언 시 fileList는 file로 변환
      let file = e.target.files;
      // 사용자가 추가한 파일을 URL 형식으로 변환해줌.
      let url = URL.createObjectURL(file[0]);
      this.pageState++;
      this.uploadImg = url;
      console.log(this.uploadImg);
    },
    publish() {
      let postData = {
        name: "Mun ho",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: `${this.uploadImg}`,
        likes: 0,
        date: "May 15",
        liked: false,
        content: `${this.content}`,
        filter: "perpetua",
      };
      this.data.unshift(postData);
      this.pageState = 0;
    },
  },
  components: {
    Container,
  },
};
</script>

<style scoped>
@import "./style/app.css";

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
  width: 100%;
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
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
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
</style>
