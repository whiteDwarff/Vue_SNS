import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt"
import router from "@/router/router.js";
// store import 
import store from "./store";

const emitter = mitt();
const app = createApp(App)
// 보관함에 { emitter : emitter } 을 추가한 것
app.config.globalProperties.emitter = emitter;

app.use(store).mount("#app");
app.use(router)
