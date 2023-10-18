<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  desc: String
});
</script>

<template>
  <div class="container">
    <div class="container bg-primary-50 py-20 sm:py-24">
      <h2 class="text-2xl font-bold tracking-tight text-primary">
        {{ props.title }}
      </h2>
      <p class="mt-6 text-md max-w-2xl leading-8" v-html="props.desc"></p>
    </div>
  </div>
</template>
