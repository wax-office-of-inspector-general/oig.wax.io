<script setup>
import GeneralHeader from '../components/GeneralHeader.vue';
import OIGFaq from '../components/OIGFaq.vue';
import OIGTeam from '../components/OIGTeam.vue';
import BallotView from '../components/ballot/BallotView.vue';

const headline = 'OIG Election';
const subline =
  'Cast your vote in blockchain governance and have your voice heard in shaping the future of decentralized technology!';
</script>

<template>
  <GeneralHeader :headline="headline" :subline="subline" />
  <BallotView />
  <OIGTeam />
  <OIGFaq />
</template>
