<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
</script>

<template>
  <section class="juzs">
    <div class="container">
      <Bismillah />
      <div class="juzs__content">
        <div class="juzs__content-cards">
          <RouterLink
            :to="'/juzs/' + item"
            v-for="item in 30"
            :key="item"
            class="juzs__content-link"
          >
            Juz {{ item }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
