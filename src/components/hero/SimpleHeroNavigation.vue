<script setup>
import { useSlots } from 'vue';

const props = defineProps({
  title: String,
  desc: String
});

const slots = useSlots()
</script>

<template>
  <div class="container">
    <div class="container bg-primary-50 py-16 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-primary">
        {{ props.title }}
      </h2>
      <p class="mt-4 text-md max-w-2xl leading-8" v-html="props.desc"></p>
      <div v-if="slots.nav" class="mt-8 md:mt-8">
        <div class="flex flex-col md:flex-row gap-4">
          <slot name="nav"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
