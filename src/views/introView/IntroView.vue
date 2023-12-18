<script setup>
import { useAyahStore } from "@/stores/getAyahStore";

import randomAyahs from "@/assets/js/randomAyahs";
import Select from "@/components/UI/select/Select.vue";

const ayahStore = useAyahStore();

</script>

<template>
  <section class="intro">
    <div class="container">
      <h1 class="title">Holy Qur'an</h1>
      <h2 class="intro__title text-arabic">
        بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ ٱلْحَمْدُ لِلّٰهِ ٱلَّذِي خَلَقَ
        ٱلْإِنْسَانَ وَٱلْجَانَّ وَ ٱلسَّمٰوَاتِ وَ ٱلْأَرْضَ وَ مَا فِيهُمَا وَ
        مَا بَيْنَهُمَا وَ هُوَ ذُوْ ٱلْجَلَالِ وَ ٱلْإِكْرَامِ وَ هُوَ عَلَى
        كُلِّ شَيْءٍ قَدِيرٌ
      </h2>
      <p class="intro__subtitle">
        All praise is for Allah Who created man and jinn and the heavens and the
        earth and what is in them and what is between them and He is the Lord of
        Majesty and Bounty and He has power over everything.
      </p>
      <p class="intro__ayah" :class="{'text-arabic': item.edition.language == 'ar'}" v-for="(item, idx) in ayahStore.ayahs" :key="item.edition.identifier">
        «{{ item?.text }}»
        <RouterLink to="/ayahs" class="intro__ayah-number"
          >({{ randomAyahs }})</RouterLink
        >
      </p>
      <Suspense>
        <Select/>
      </Suspense>
    </div>
  </section>
</template>
