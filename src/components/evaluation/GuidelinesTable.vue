<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

import LoadingSpinner from '../LoadingSpinner.vue';

const store = useStore();

const guidelines = computed(() => store.state.notion.guidelines);
const loading = computed(() => store.state.ballot.loading);

onMounted(() => {
  if (!guidelines.value.length) store.dispatch('notion/fetchGuidelines');
});
</script>

<template>
  <p>Guidelines</p>
</template>
