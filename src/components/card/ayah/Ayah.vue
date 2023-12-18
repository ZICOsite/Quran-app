<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
  numberAyah: String,
});
</script>

<template>
  <p
    class="ayah-text"
    :class="[
      { 'text-arabic': info?.edition.language == 'ar' },
      { 'transliteration': info?.edition.type == 'transliteration' },
    ]"
  >
    «{{ info?.text }}»
    <RouterLink
      v-if="numberAyah"
      :to="'/ayahs/' + numberAyah"
      class="ayah-text__number"
      >({{ numberAyah }})</RouterLink
    >
  </p>
</template>
