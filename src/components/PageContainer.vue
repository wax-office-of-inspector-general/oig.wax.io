<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
</script>
<template>
  <div class="container pt-12 pb-16">
    <slot v-if="slots.content" name="content"></slot>
  </div>
</template>
