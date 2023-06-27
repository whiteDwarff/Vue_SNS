<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div v-for="(list, i) in follower" :key="i" class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${list.image})` }"
      ></div>
      <span class="profile-name">{{ list.name }}</span>
    </div>
    <div v-if="postingData != ''">
      <Post :list="postingData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import Post from "./PostVue.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["postingData"]),
  },
  props: {
    one: Number,
  },
  components: {
    Post,
  },
  /*
    setup : 데이터 생성 및 조작, methods, computed, watch 및 hook 사용 가능
    ref   : references data를 사용하기 위해 (실시간 랜더링을 사용하기 위해)
    onMounted : optionsAPI의 mounted 속성을 setup()에서 사용
      - 모든 life cycle hook은 앞에 on을 붙여 사용해야 한다.

    setup() 선언 시 사용되는 parameter는 
      - 첫번째 : 부모의 props 데이터
      - 두번째 : attrs, slots, emit, err 등이 담겨 있음
  */
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    function search(value) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(value) != -1;
      });
      follower.value = [...newFollower];
    }

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
        followerOriginal.value = [...res.data];
      });
    });

    return { follower, search };
  },
};
</script>

<style>
</style>