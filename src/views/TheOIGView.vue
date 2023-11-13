<script setup>
import SimpleHero from '../components/hero/SimpleHero.vue';
import OIGExplanation from '../components/OIGExplanation.vue';
import OIGElectionProcess from '../components/OIGElectionProcess.vue';
import OIGTeam from '../components/OIGTeam.vue';
import OIGPillars from '@/components/oig/OIGPillars.vue';

const title = 'OIG, more than a framework';
const desc =
  'A unique approach to blockchain governance for a complex DPos environment';
</script>

<template>
  <SimpleHero :title="title" :desc="desc" />
  <OIGExplanation />
  <OIGPillars />
  <OIGTeam />
  <OIGElectionProcess />
</template>
