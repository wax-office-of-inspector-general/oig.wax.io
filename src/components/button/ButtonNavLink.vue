<script setup>
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline';

defineProps({
  text: String,
  route: Object
});
</script>
<template>
  <router-link :to="route" v-slot="{ isActive }">
    <button
      class="flex flex-row items-center text-base md:text-sm px-4 py-1.5 rounded-md drop-shadow-sm"
      :class="{
        'bg-white text-primary': !isActive,
        'bg-primary text-white': isActive
      }"
    >
      {{ text }}
      <ChevronDoubleRightIcon class="h-3 w-3 ml-2" />
    </button>
  </router-link>
</template>
