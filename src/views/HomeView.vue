<script setup>
import TeaserFeatures from '../components/TeaserFeatures.vue';
import TeaserGovernance from '../components/TeaserGovernance.vue';
import TeaserGuilds from '../components/TeaserGuilds.vue';
import MediumFeedSection from '../components/MediumFeedSection.vue';
import TeaserOIG from '../components/TeaserOIG.vue';
import SimpleHero from '../components/hero/SimpleHero.vue';

const title = ' Office of Inspector General';
const desc =
  'A neutral third-party role designed to evaluate WAX Guild Candidates contributions to the ecosystem and providing ongoing transparency for the community.';
</script>

<template>
  <SimpleHero :title="title" :desc="desc" />
  <TeaserGovernance />
  <TeaserFeatures />
  <TeaserOIG />
  <TeaserGuilds />
  <MediumFeedSection />
</template>
