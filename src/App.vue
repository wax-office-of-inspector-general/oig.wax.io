<script setup>
import { RouterView } from "vue-router";

import HeadingComp from "@/components/HeadingComp.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <HeadingComp />

  <RouterView />

  <FooterComp />
</template>

<style scoped></style>
