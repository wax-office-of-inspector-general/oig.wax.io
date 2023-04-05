<script setup>
import { RouterView } from 'vue-router';

import HeadingComp from '@/components/HeadingComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import OIGBackground from './components/OIGBackground.vue';
</script>

<template>
  <OIGBackground />

  <HeadingComp />

  <main>
    <RouterView />
  </main>

  <FooterComp />
</template>

<style scoped></style>
