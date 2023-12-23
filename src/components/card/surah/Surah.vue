<script setup>
    const props = defineProps({
        surah: {
            type: Object,
            required: true,
        }
    })
</script>

<template>
    <div class="surah-item">
        <span class="surah-item__number">{{ surah?.number }}</span>
        <div class="surah-item__desc">
            <h3 class="surah-item__name">{{ surah?.englishName }}</h3>
            <p class="surah-item__translate">{{ surah?.englishNameTranslation }}</p>
        </div>
        <p class="surah-item__arabic-name text-arabic">{{ surah?.name }}</p>
    </div>
</template>
