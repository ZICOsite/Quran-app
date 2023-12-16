<script setup>
import { Search } from '@element-plus/icons-vue'

const search = ref("")

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
    path: "/ayahs",
    name: "Ayahs",
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

</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="nav__menu">
        <ul class="nav__menu-list">
          <li class="nav__menu-item" v-for="item in pages" :key="item.name">
            <RouterLink :to="item.path" class="nav__menu-link">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <form action="" class="nav__menu-form">
          <el-input
            class="nav__menu-input"
            placeholder="Search the Quran"
            :prefix-icon="Search"
            v-model="search"
            clearable
          />
        </form>
      </div>
      <RouterLink to="/" class="nav__logo text-arabic">الْقُرْآن الْكَرِيْم</RouterLink>
    </div>
  </nav>
</template>
