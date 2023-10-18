<script setup>
import { defineProps } from 'vue';

defineProps({
  headline: String,
  subline: String
});
</script>

<template>
  <div class="container border-red border mx-auto relative min-h-[30vh] overflow-hidden">
    <div
      class="relative mx-auto flex flex-col w-full items-start justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8 z-40"
    >
      <div class="pt-32 pb-32">
        <h2
          class="font-serif text-2xl max-w-lg font-bold uppercase leading-tight tracking-wide"
        >
          {{ headline }}
        </h2>
        <p class="mt-6 max-w-md tracking-tight">
          {{ subline }}
        </p>
      </div>
    </div>
    <div
      class="absolute inset-0 mt-4 mx-auto flex flex-col max-w-7xl items-start justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8 z-10"
    >
      <div
        class="opacity-10 bg-hive bg-contain bg-right-bottom bg-no-repeat h-full w-full scale-150 translate-x-[-10%] pr-4 absolute bottom-0 right-0 z-20"
      ></div>
    </div>
  </div>
</template>
