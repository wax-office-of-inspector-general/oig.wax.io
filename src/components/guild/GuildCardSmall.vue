<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
});
</script>

<template>
  <div class="flex flex-col relative group">
    <div
      class="relative bg-secondary-50 py-5 px-7 text-xs font-serif font-medium text-font leading-6 rounded-md drop-shadow-sm z-20"
    >
      <p class="text-center">{{ props.title }}</p>
    </div>

    <div
      class="absolute w-full h-full bg-tertiary-50 z-10 rounded-md drop-shadow-sm translate-x-[-3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"
    ></div>
  </div>
</template>
