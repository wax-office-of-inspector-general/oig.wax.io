<script setup>
import LoginTrigger from './LoginTrigger.vue';
</script>
<template>
  <div class="flex items-center md:ml-12 relative">
    <a
      href="#"
      class="bg-tertiary ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 font-serif font-bold px-4 py-2 text-sm text-white shadow-sm hover:bg-indigo-700"
      >Login</a
    >
    <LoginTrigger msg="OIG Login" />
  </div>
</template>
