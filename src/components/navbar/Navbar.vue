<script setup>
import { RouterLink } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import { useSearchStore } from "@/stores/getSearchStore";
import { useRouter } from "vue-router";

const searchStore = useSearchStore();
const router = useRouter();

const search = ref("");

const menu = ref(false);

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/surahs",
    name: "Surahs",
  },
  {
    path: "/juzs",
    name: "Juzs",
  },
  {
    path: "/sajdas",
    name: "Sajdas",
  },
];

const getResultsSearch = (keyword) => {
  searchStore.getSearch(keyword);
  router.push("/search");
  menu.value = false;
};
</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="nav__menu" :class="{ active: menu }">
        <ul class="nav__menu-list">
          <li class="nav__menu-item" v-for="item in pages" :key="item.name">
            <RouterLink
              :to="item.path"
              class="nav__menu-link"
              @click="menu = false"
            >
              {{ item.name }}
            </RouterLink>
          </li>
          <RouterLink to="/error">test</RouterLink>
        </ul>
        <form
          action=""
          class="nav__menu-form"
          @submit.prevent="getResultsSearch(search)"
        >
          <el-input
            class="nav__menu-input"
            placeholder="Search the Quran"
            :prefix-icon="Search"
            v-model="search"
            clearable
            required
          />
        </form>
      </div>
      <RouterLink to="/" @click="menu = false" class="nav__logo text-arabic"
        >الْقُرْآن الْكَرِيْم</RouterLink
      >
      <div class="nav__burger" @click="menu = !menu">
        <span class="nav__burger-line"></span>
      </div>
    </div>
  </nav>
</template>
