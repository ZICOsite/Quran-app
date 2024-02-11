<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import { useSajdasStore } from "@/stores/getSajdasStore";
import SurahDesc from "@/components/card/surah/SurahDesc.vue";

const sajdasStore = useSajdasStore();
sajdasStore.getSajdas();
</script>

<template>
  <section class="sajdas">
    <div class="container">
      <Bismillah />
      <div class="sajdas__content">
        <div class="sajdas__content-cards">
          <SurahDesc
            :ayahsList="sajdasStore.sajdas?.ayahs"
            :edition="sajdasStore.sajdas?.edition"
          />
        </div>
      </div>
    </div>
  </section>
</template>
