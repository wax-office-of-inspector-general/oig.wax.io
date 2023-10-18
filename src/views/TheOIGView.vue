<script setup>
import Simplehero from '../components/hero/Simplehero.vue';
import OIGExplanation from '../components/OIGExplanation.vue';
import OIGElectionProcess from '../components/OIGElectionProcess.vue';
import OIGTeam from '../components/OIGTeam.vue';
import OIGRole from '../components/OIGRole.vue';
import OIGSkills from '../components/OIGSkills.vue';

const title = 'The OIG on WAX';
const desc =
  '3 Inspector Generals, elected by the WAX community decentralized the WAX network.';
</script>
<template>
  <Simplehero :title="title" :desc="desc" />
  <OIGExplanation />
  <OIGTeam />
  <OIGElectionProcess />
  <OIGRole />
  <OIGSkills />
</template>
