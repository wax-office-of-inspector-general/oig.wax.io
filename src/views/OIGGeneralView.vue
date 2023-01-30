<script setup>
import GeneralHeader from '../components/GeneralHeader.vue';
import OIGCompetence from '../components/OIGCompetence.vue';
import OIGFaq from '../components/OIGFaq.vue';
import OIGTeam from '../components/OIGTeam.vue';

const headline = 'Governance on WAX';
const subline =
  'The Office of Inspector General is a neutral third-party role designed to evaluate WAX Guild Candidates’ contribution to the ecosystem and provide ongoing transparency for the community. The Office of Inspector General (IG) is designed as as committee with 3 members who will standardize WAX Guild evaluations, and properly recognize those WAX Guilds making valuable contributions to the WAX ecosystem.';
</script>
<template>
  <GeneralHeader :headline="headline" :subline="subline" />
  <OIGCompetence />
  <OIGTeam />
  <OIGFaq />
</template>
