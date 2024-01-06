import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/surahs",
      name: "surahs",
      component: () => import("@/pages/SurahsPage.vue"),
    },
    {
      path: "/surahs/:id",
      name: "surah",
      component: () => import("@/pages/SurahPage.vue"),
    },
    {
      path: "/ayahs/:id",
      name: "ayahs",
      component: () => import("@/pages/AyahsPage.vue"),
    },
    {
      path: "/juzs",
      name: "juzs",
      component: () => import("@/pages/JuzsPage.vue"),
    },
    {
      path: "/sajdas",
      name: "sajdas",
      component: () => import("@/pages/SajdasPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
