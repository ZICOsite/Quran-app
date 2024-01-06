<script setup>
import { RouterView } from "vue-router";
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>
