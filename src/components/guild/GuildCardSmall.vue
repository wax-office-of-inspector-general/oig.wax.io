<script setup>
const props = defineProps({
  title: String,
  score: Number,
  pos: Number
});
</script>

<template>
  <div class="flex flex-col relative group">
    <div
      class="relative bg-secondary-50 py-5 px-7rounded-md drop-shadow-sm z-20"
    >
      <p
        class="text-center text-sm font-serif font-bold text-primary leading-6"
      >
        {{ props.title }}
      </p>
      <p v-if="props.score" class="text-center text-xs text-primary mt-1">
        #{{ pos }} / {{ parseFloat(props.score / 10000).toFixed(0) }}p
      </p>
    </div>

    <div
      class="absolute w-full h-full bg-tertiary-50 z-10 rounded-md drop-shadow-sm translate-x-[-3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"
    ></div>
  </div>
</template>
