import { createStore } from 'vuex';
import data from "./assets/theme";

const store = createStore({
  state() {
    return {
      name: 'kang',
      age: 28,
      data
    }
  },
  // data를 수정
  // 파라미터를 입력받는다.
  mutations: {
    updateName(state) {
      state.name = 'pack';
    },
    setAge(state, payload) {
      state.age += payload;
    }
  },
})

export default store;
/*
vuex에서는 데이터의 값을 직접적으로 수정하면 안된다.
 1. 미리 store.js에 수정방법을 정의해두고
 2. 그 방법을 컴포넌트에서 사용하여 수정해야함
*/ 