<script setup>
const props = defineProps({
  surah: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <RouterLink :to="'/surahs/' + surah?.number" class="surah-item">
    <span class="surah-item__number">{{ surah?.number }}</span>
    <div class="surah-item__desc">
      <h3 class="surah-item__name">
        {{ surah?.englishName }}
        <span class="surah-item__translate">
          ({{ surah?.englishNameTranslation }})
        </span>
      </h3>
      <span class="surah-item__ayahs-count"
        >{{ surah?.numberOfAyahs }} Ayahs</span
      >
    </div>
    <p class="surah-item__arabic-name text-arabic">{{ surah?.name }}</p>
  </RouterLink>
</template>
