<script setup>
import TeaserFeatures from '../components/TeaserFeatures.vue';
import TeaserGovernance from '../components/TeaserGovernance.vue';
import TeaserGuilds from '../components/TeaserGuilds.vue';
import MediumFeedSection from '../components/MediumFeedSection.vue';
import TeaserOIG from '../components/TeaserOIG.vue';
import SimpleHero from '../components/hero/SimpleHero.vue';

const title = 'Governance on WAX';
const desc =
  'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.';
</script>

<template>
  <SimpleHero :title="title" :desc="desc" />
  <TeaserGovernance />
  <TeaserFeatures />
  <TeaserOIG />
  <TeaserGuilds />
  <MediumFeedSection />
</template>
