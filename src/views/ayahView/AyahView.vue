<script setup>
import { useAyahStore } from "@/stores/getAyahStore";
import { useRoute, useRouter } from "vue-router";
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import Select from "@/components/UI/select/Select.vue";

const ayahStore = useAyahStore();

const router = useRouter();
const route = useRoute();

const dataAyahValue = ref("");

const queryAyah = (surahAndAyah) => {
  router.push("/ayahs/" + surahAndAyah);
  ayahStore.getAyah(surahAndAyah, "ar.alafasy, en.transliteration");
  dataAyahValue.value = "";
};
</script>

<template>
  <section class="ayah">
    <div class="container">
      <Bismillah />
      <div class="ayah__content">
        <div class="ayah__content-top">
          <h2 class="ayah__content-title">
            Surah {{ ayahStore.getFirstAyahData?.surah.englishName }} ({{
              route.params.id
            }}) Ayahs
            {{ ayahStore.getFirstAyahData?.surah.numberOfAyahs }}
          </h2>
          <p class="ayah__content-name text-arabic">
            <span>{{
              ayahStore.getFirstAyahData?.surah.englishNameTranslation
            }}</span>
            | {{ ayahStore.getFirstAyahData?.surah.name }}
          </p>
        </div>
        <div class="ayah__content-cards">
          <Ayah
            class="ayah__content-text"
            v-for="item in ayahStore.ayahs"
            :key="item.edition.identifier"
            :info="item"
          />
        </div>
        <form
          action=""
          class="ayah__form"
          @submit.prevent="queryAyah(dataAyahValue)"
        >
          <Suspense>
            <Select :surahAndAyah="route.params.id" :transliteration="true" />
            <template #fallback>
              <h1>Loading</h1>
            </template>
          </Suspense>
          <el-input
            class="ayah__form-input"
            v-model="dataAyahValue"
            placeholder="Ayah search (1:1)"
            clearable
            required
          />
          <button class="ayah__form-btn">find</button>
          <audio :src="ayahStore.getFirstAyahData?.audio" controls></audio>
        </form>
      </div>
    </div>
  </section>
</template>
