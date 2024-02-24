<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import { useSearchStore } from "@/stores/getSearchStore.js";
import SurahDesc from "@/components/card/surah/SurahDesc.vue";

const searchStore = useSearchStore();
</script>

<template>
  <section class="search">
    <div class="search__container">
      <Bismillah />
      <div class="search__content">
        <p class="search__content-results">
          On request
          <b
            ><i>{{ searchStore.keyword }}</i></b
          >, total results: {{ searchStore.count }}
        </p>
        <div
          class="search__content-cards"
          :class="[
            { 'cards-1': searchStore.count == 1 },
            { 'cards-2': searchStore.count == 2 },
          ]"
        >
          <el-skeleton :loading="!searchStore.search" animated>
            <template #template>
              <el-skeleton-item :key="item" variant="p" style="height: 200px" />
            </template>
            <template #default>
              <SurahDesc :ayahsList="searchStore.search" />
            </template>
          </el-skeleton>
        </div>
      </div>
    </div>
  </section>
</template>
