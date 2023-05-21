<script setup>
const props = defineProps({
  onClick: Function,
  text: String,
  cssClass: String
});
</script>

<template>
  <button
    :onClick="props.onClick"
    class="inline-block rounded-md whitespace-nowrap bg-tertiary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-tertiary-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    :class="props.cssClass"
  >
    {{ props.text }}
    <span class="ml-1" aria-hidden="true"> &rarr;</span>
  </button>
</template>
