<script setup>
import { RouterView } from "vue-router";
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
