<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  desc: String
});
</script>

<template>
  <div class="container">
    <div class="pt-8 md:pt-10">
      <h2 class="text-2xl font-bold tracking-tight text-primary">
        {{ props.title }}
      </h2>
      <p
        v-if="props.desc"
        class="mt-6 text-base max-w-xl leading-7"
        v-html="props.desc"
      ></p>
    </div>
  </div>
</template>
