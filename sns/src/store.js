import { createStore } from 'vuex';
import data from "./assets/theme";
import filter from "./assets/filter";
import axios from "axios";

const store = createStore({
  state() {
    return {
      data,
      filter,
      pageState: 0,
      uploadImg: '',
      filterName: '',
      content: '',
      postingData: [],
    }
  },
  // ajax로 요청하는 코드, 비동기 코드를 담는 곳
  // actions 함수의 실행 $store.dispatch('method')
  actions: {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then(res => {
          // mutations에서 정의한 method 사용시 commit()이 필요하다.
          context.commit('setMode', res.data)
        })
    }
  },
  // state를 변경하려면 사용
  // mutations 함수의 실행 $store.commit('method')
  mutations: {
    likeHandler(state, payload) {
      let target = state.data[payload];
      if (target.liked) target.likes--;
      else target.likes++;
      target.liked = !target.liked
    },
    uploadImg(state, payload) {
      state.uploadImg = payload;
      state.pageState += 1;
      console.log(payload)
    },
    addFilter(state, payload) {
      state.filterName = payload;
      console.log(payload)
    },
    revertPageHandler(state,) {
      if (state.pageState == 2) {
        state.pageState = 1;
      } else if (state.pageState == 1) {
        state.pageState = 0;
      }
    },
    nextPageHandler(state) {
      state.pageState = 2;
    },
    uploadPosting(state) {
      let postingData = {
        name: "Mun ho",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: state.uploadImg,
        likes: 0,
        date: "May 15",
        liked: false,
        content: state.content,
        filter: state.filterName,
      }
      state.postingData = postingData
      state.data.unshift(postingData);
      state.pageState = 0;
    },
    submit(state, payload) {
      state.content = payload;
    },
    setMode(state, payload) {
      state.data.unshift(payload);
    },
    changePaging(state, payload) {
      state.pageState = payload;
    },

  },
})

export default store;
/*
vuex에서는 데이터의 값을 직접적으로 수정하면 안된다.
 1. 미리 store.js에 수정방법을 정의해두고
 2. 그 방법을 컴포넌트에서 사용하여 수정해야함
*/ 