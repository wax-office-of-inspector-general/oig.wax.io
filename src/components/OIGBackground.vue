<template>
  <div class="h-screen w-screen bg-slate-500 absolute inset-0 z-100 hidden">
    <canvas
      ref="hiveCont"
      class="absolute inset-0 border border-red-900"
    ></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Hive from './hive';

const hiveCont = ref(null);

onMounted(() => {
  const hive = new Hive(hiveCont.value, 2, 2);
});
</script>
