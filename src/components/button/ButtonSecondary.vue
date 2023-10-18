<script setup>
const props = defineProps({
  href: String,
  text: String,
  cssClass: String
});
</script>

<template>
  <a
    :href="props.href"
    class="inline-block rounded-md border border-tertiary px-3.5 py-2.5 text-sm text-font shadow-sm hover:bg-primary hover:text-white focus-visible:outline-none outline-none"
    :class="props.cssClass"
  >
    {{ props.text }}
    <span class="ml-1" aria-hidden="true"> &rarr;</span>
  </a>
</template>
