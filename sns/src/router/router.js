import { createWebHistory, createRouter } from "vue-router";
import Write from "@/components/WriteVue.vue";
import Filter from "@/components/FilterVue.vue";
import Post from "@/components/PostVue.vue";

const routes = [
  {
    path: "/write",
    component: Write,
  },
  {
    path: "/filter",
    component: Filter,
  },
  {
    path: "/post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
