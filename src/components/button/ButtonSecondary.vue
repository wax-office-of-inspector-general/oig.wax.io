<script setup>
const props = defineProps({
  href: String,
  route: Object,
  text: String,
  cssClass: String
});
</script>

<template>
  <router-link
    :to="props.href ? props.href : props.route"
    :target="props.href ? '_blank' : false"
  >
    <button
      class="inline-block rounded-md border border-tertiary px-3.5 py-2.5 text-sm text-font shadow-xs hover:bg-primary hover:text-white focus-visible:outline-hidden outline-hidden"
      :class="props.cssClass"
    >
      {{ props.text }}
      <span class="ml-1" aria-hidden="true"> &rarr;</span>
    </button>
  </router-link>
</template>
