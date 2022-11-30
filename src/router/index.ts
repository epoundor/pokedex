import { createRouter, createWebHistory } from "vue-router";
// import useNotifier from "@/plugins/notifier";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
