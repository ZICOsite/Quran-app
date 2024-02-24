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
          <el-skeleton :loading="!sajdasStore.sajdas?.ayahs" animated>
            <template #template>
              <el-skeleton-item
                v-for="item in 2"
                :key="item"
                variant="p"
                style="height: 200px"
              />
            </template>
            <template #default>
              <SurahDesc
                :ayahsList="sajdasStore.sajdas?.ayahs"
                :edition="sajdasStore.sajdas?.edition"
              />
            </template>
          </el-skeleton>
        </div>
      </div>
    </div>
  </section>
</template>
