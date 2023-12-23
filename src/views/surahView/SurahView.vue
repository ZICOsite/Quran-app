<script setup>
import { useSurahsStore } from '@/stores/getSurahsStore';
import Surah from '@/components/card/surah/Surah.vue';

const surahsStore = useSurahsStore()
surahsStore.getSurahs()

</script>

<template>
    <section class="surahs">
        <div class="container">
            <Bismillah />
            <div class="surahs__content">
                <div class="surahs__content-cards">
                    <Surah v-for="item in surahsStore.surahs" :key="item.name" :surah="item"/>
                </div>
            </div>
        </div>
    </section>
</template>
