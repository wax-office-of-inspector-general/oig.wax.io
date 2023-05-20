<script setup>
import { useSessionKit, useSession } from '../composables/useSession';

const { login, logout, transact } = useSessionKit();
const session = useSession();
</script>

<template>
  <div class="card">
    <div v-if="session">
      <p>Logged in as {{ session.actor }}</p>
      <button type="button" class="primary" @click="transact">
        Test Transaction (No Broadcast)
      </button>
      <button type="button" @click="logout">Logout</button>
    </div>
    <div v-else>
      <button type="button" @click="login">Login</button>
    </div>
  </div>
</template>

<style scoped></style>
