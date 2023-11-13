<script setup>
import SimpleHero from '../components/hero/SimpleHero.vue';

const headline = 'Guilds on WAX';
const subline =
  'The heartbeat of the ecosystem, each with unique and valuable contributions to a flourish ecosystem.';
</script>
<template>
  <SimpleHero :title="headline" :desc="subline" />

  <div class="container pt-12 pb-16">
    <p>Anatomy of a Guild</p>
  </div>
</template>