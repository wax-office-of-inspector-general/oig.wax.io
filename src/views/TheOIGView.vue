<script setup>
import SimpleHero from '../components/hero/SimpleHero.vue';
import OIGExplanation from '../components/OIGExplanation.vue';
import OIGElectionProcess from '../components/OIGElectionProcess.vue';
import OIGTeam from '../components/OIGTeam.vue';

const title = 'The OIG on WAX';
const desc =
  '3 Inspector Generals, elected by the WAX community decentralized the WAX network.';
</script>
<template>
  <SimpleHero :title="title" :desc="desc" />
  <OIGExplanation />
  <OIGTeam />
  <OIGElectionProcess />
</template>
