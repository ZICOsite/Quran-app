<script setup>
import { useRoute } from "vue-router";
import { useSurahsStore } from "@/stores/getSurahsStore";
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import SurahDesc from "@/components/card/surah/SurahDesc.vue";

const route = useRoute();
const surahsStore = useSurahsStore();
surahsStore.getSurahSingle(route.params.id, "ar.alafasy, en.transliteration");

const fullSurahAudio = ref(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${route.params.id}.mp3`);

</script>

<template>
  <section class="surah">
    <div class="container">
      <Bismillah />
      <div class="surah__content">
        <h2 class="surah__content-title">
          {{ surahsStore.getFirstSurahData?.englishName }}
        </h2>
        <p class="surah__content-subtitle">
          {{ surahsStore.getFirstSurahData?.englishNameTranslation }}
        </p>
        <audio
          :src="fullSurahAudio"
          class="surah__content-audio-full"
          controls
        ></audio>
        <div class="surah__content-cards">
          <SurahDesc
            v-for="item in surahsStore.surah"
            :key="item.edition.identifier"
            :ayahsList="item.ayahs"
            :numberSurah="surahsStore.getFirstSurahData?.number"
            :edition="item.edition"
          />
        </div>
        <Suspense>
          <Select :surahAndAyah="route.params.id" :transliteration="true" :surah="true" class="surah__select" />
          <template #fallback>
            <h1>Loading</h1>
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>
