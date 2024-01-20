<script setup>
import { useTranslationStore } from "@/stores/getTranslationStore";
import { useAyahStore } from "@/stores/getAyahStore";
import { useRoute } from "vue-router";
import { useSurahsStore } from "@/stores/getSurahsStore";

const props = defineProps({
  surahAndAyah: String,
  transliteration: Boolean,
  surah: {
    type: Boolean,
    default: false
  }
})

const ayahStore = useAyahStore()
const translationStore = useTranslationStore();
const surahsStore = useSurahsStore();
await translationStore.getTranslation();

const route = useRoute()
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
  if (props.surah) {
    if (props.transliteration) {
      surahsStore.getSurahSingle(route.params.id, `ar.alafasy, en.transliteration, ${query.value.join()}`, +route.query.page * 20 - 20);
    } else {
      surahsStore.getSurahSingle(route.params.id, `ar.alafasy, ${query.value.join()}`, +route.query.page * 20 - 20);
    }
  } else {
    if (props.transliteration) {
      ayahStore.getAyah(props.surahAndAyah, `ar.alafasy, en.transliteration, ${query.value.join()}`)
    } else {
      ayahStore.getAyah(props.surahAndAyah, `ar.alafasy, ${query.value.join()}`)
    }
  }
});

</script>

<template>
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
