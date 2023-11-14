<script setup>
const pillars = [
  'Assist WAX Token holders in their guild voting decision-making.',
  'Objectively and consistently reviewing all WAX Guild Candidates.',
  'Ensure Active and Standby Guilds are paid in alignment with their evaluation and appointed position.'
];
</script>
<template>
  <div class="container py-4 sm:py-8">
    <div
      class="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-x-2 md:divide-y-0 md:px-6"
    >
      <div
        v-for="(pillar, index) in pillars"
        :key="index"
        class="prose px-8 py-6 md:py-4"
      >
        <h2 class="mb-3">{{ index+1 }}</h2>
        <p>{{ pillar }}</p>
      </div>
    </div>
  </div>
</template>
