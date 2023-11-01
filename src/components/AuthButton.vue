<script setup>
import LoginTrigger from './LoginTrigger.vue';
import { useSessionKit, useSession } from '../composables/useSession';

const { login, logout, transact } = useSessionKit();
const session = useSession();
</script>
<template>
  <div class="flex items-center md:ml-12 relative">
    <a
      href="#"
      class="bg-tertiary ml-8 inline-flex items-center justify-center rounded-md border border-transparent font-serif font-bold px-4 py-2 text-sm text-white shadow-sm hover:bg-indigo-700"
      >Login</a
    >
    <LoginTrigger />
  </div>
</template>
