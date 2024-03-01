<script setup>
import IconLogo from '@/components/icons/IconLogo.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="empty">
    <RouterLink to="/"><IconLogo :size="200"/></RouterLink>
    <h1 class="container empty__title">Sorry, something went wrong</h1>
  </main>
</template>
