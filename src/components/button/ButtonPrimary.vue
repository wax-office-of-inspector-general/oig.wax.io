<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  href: String,
  text: String,
  cssClass: String
});
</script>

<template>
  <a
    :href="props.href"
    class="inline-block rounded-md whitespace-nowrap bg-primary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-primary-700 hover:text-white focus-visible:outline-none outline-none"
    :class="props.cssClass"
    :target="'_blank'"
  >
    {{ props.text }}
    <span class="ml-1" aria-hidden="true"> &rarr;</span>
  </a>
</template>
