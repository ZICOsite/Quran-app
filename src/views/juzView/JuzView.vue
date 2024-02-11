<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import { useRoute } from "vue-router";
import { useJuzStore } from "@/stores/getJuzStore.js";
import Surah from "@/components/card/surah/Surah.vue";

const route = useRoute();
const juzStore = useJuzStore();
juzStore.getJuz(route.params.id);
</script>

<template>
  <section class="juz">
    <div class="container">
      <Bismillah />
      <div class="juz__content">
        <div class="juz__content-cards">
          <Surah
            v-for="item in juzStore.juz?.surahs"
            :key="item.number"
            :surah="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
