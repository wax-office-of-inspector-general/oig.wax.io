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
    class="inline-block font-serif mt-3 text-sm text-tertiary border-b border-current no-underline hover:text-font hover:opacity-80"
    :class="props.cssClass"
  >
    {{ props.text }}
    <span aria-hidden="true"> &rarr;</span>
  </a>
</template>
