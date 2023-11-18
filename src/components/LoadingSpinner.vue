<script setup>
defineProps({ content: String });
</script>
<template>
  <div class="flex items-center" role="status">
    <div class="flex justify-center items-center">
      <div
        class="animate-ping inline-block w-3 h-3 mr-5 bg-tertiary duration-1000 delay-500 rounded-full"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <p class="font-serif font-bold text-xs">{{ content }}</p>
  </div>
</template>
