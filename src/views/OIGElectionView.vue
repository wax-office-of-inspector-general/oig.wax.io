<script setup>
import GeneralHeader from '../components/GeneralHeader.vue';
import OIGFaq from '../components/OIGFaq.vue';
import OIGElectionTimeline from '../components/OIGElectionTimeline.vue';
import OIGElectionCandidates from '../components/OIGElectionCandidates.vue';
import OIGTeam from '../components/OIGTeam.vue';

const headline = 'OIG Election';
const subline =
  'Cast your vote in blockchain governance and have your voice heard in shaping the future of decentralized technology!';
</script>
<template>
  <GeneralHeader :headline="headline" :subline="subline" />
  <OIGElectionTimeline />
  <OIGElectionCandidates />
  <OIGTeam />
  <OIGFaq />
</template>
