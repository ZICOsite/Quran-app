<script setup>
import { useTranslationStore } from "@/stores/getTranslationStore";
import { useAyahStore } from "@/stores/getAyahStore";

import randomAyahs from "@/assets/js/randomAyahs";

const ayahStore = useAyahStore()
const translationStore = useTranslationStore();
await translationStore.getTranslation();

const query = ref("");
const options = ref([]);

onMounted(() => {
  for (let i = 0; i < translationStore.ustazy.length; i++) {
    options.value.push({
      value: translationStore.ustazy[i].identifier,
      label: `${translationStore.ustazy[i].language} ${translationStore.ustazy[i].name} (${translationStore.ustazy[i].englishName})`,
    });
  }
});

watch(query, () => {
  ayahStore.getAyah(randomAyahs, `ar.alafasy, ${query.value.join()}`)
});

</script>

<template>
  <h1>{{ ayahStore.ayah?.text }}</h1>
  <el-select
    v-model="query"
    filterable
    multiple
    placeholder="Select translation"
    class="select-translation"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
