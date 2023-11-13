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
      class="inline-block rounded-md whitespace-nowrap bg-primary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-primary-700 hover:text-white focus-visible:outline-none outline-none"
      :class="props.cssClass"
    >
      {{ props.text }}
      <span class="ml-1" aria-hidden="true"> &rarr;</span>
    </button>
  </router-link>
</template>
