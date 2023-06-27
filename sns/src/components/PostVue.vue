<template>
  <div>
    <div class="post">
      <div class="post-header">
        <div
          class="profile"
          :style="{ backgroundImage: `url(${list.userImage})` }"
        ></div>
        <span class="profile-name">{{ list.name }}</span>
      </div>
      <div
        :class="list.filter + ' post-body'"
        :style="{ backgroundImage: `url(${list.postImage})` }"
      ></div>
      <div class="post-content">
        <div class="like-box">
          <i v-if="list.liked" class="fas fa-heart"></i>
          <i v-else-if="list.liked == false" class="far fa-heart"></i>
          <p class="content">{{ list.likes }} likes</p>
        </div>
        <p>
          <strong>{{ list.name }}</strong> {{ list.content }}
        </p>
        <p class="date">{{ list.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
.like-box {
  display: flex;
  margin: 10px 0;
}
.content {
  margin: 0 0 0 10px;
}
</style>