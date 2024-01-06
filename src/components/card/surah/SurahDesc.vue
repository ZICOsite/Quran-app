<script setup>
const props = defineProps({
  ayahsList: {
    type: Array,
    required: true,
  },
  numberSurah: Number,
  edition: Object,
});

const isPlay = ref(true);

</script>

<template>
  <div class="surah-desc" v-for="item in ayahsList" :key="item.text">
    <div class="surah-desc__top" :title="edition?.englishName">
      <span class="surah-desc__number">
        {{ numberSurah }}:{{ item.number }}
      </span>
      <button class="surah-desc__play" v-if="isPlay && item.audio" @click="isPlay = false">
        <el-icon :size="24" color="#fff"><VideoPlay /></el-icon>
      </button>
      <audio
        v-if="item.audio && !isPlay"
        :src="item.audio"
        class="surah-desc__audio"
        controls
      ></audio>
      <strong v-else class="surah-desc__name">{{
        edition?.englishName
      }}</strong>
    </div>
    <div class="surah-desc__content">
      <p
        class="surah-desc__text"
        :class="{ 'text-arabic': edition?.language == 'ar' }"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>
