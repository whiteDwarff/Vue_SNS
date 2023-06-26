<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li
          v-if="$store.state.pageState"
          @click="$store.commit('revertPageHandler')"
        >
          Cancel
        </li>
      </ul>
      <ul class="header-button-right">
        <li
          v-if="$store.state.pageState == 1"
          @click="$store.commit('nextPageHandler')"
        >
          Next
        </li>
        <li
          v-if="$store.state.pageState == 2"
          @click="$store.commit('uploadPosting')"
        >
          발행
        </li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <Container @submit="content = $event" />

    <div class="footer">
      <ul v-if="$store.state.pageState == 0" class="footer-button-plus">
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

export default {
  name: "App",
  methods: {
    upload(e) {
      let url = URL.createObjectURL(e.target.files[0]);
      this.uploadImg = url;
      this.$store.commit("uploadImg", this.uploadImg);
    },
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
