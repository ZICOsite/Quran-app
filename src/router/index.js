import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import { useSurahsStore } from "@/stores/getSurahsStore";

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
      beforeEnter(to, from) {
        const surahsStore = useSurahsStore();
        const exists = surahsStore.surahs?.find(
          (surah) => surah.number == to.params.id
        );
        if (!exists) {
          return {
            name: "NotFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
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
      path: "/juzs/:id",
      name: "Juz",
      component: () => import("@/pages/JuzPage.vue"),
      beforeEnter(to, from) {
        const exists = to.params.id >= 1 && to.params.id <= 30
        if (!exists) {
          return {
            name: "NotFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      }
    },
    {
      path: "/sajdas",
      name: "sajdas",
      component: () => import("@/pages/SajdasPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
