<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const title = 'Unparalleled Blockchain Governance';

const features = [
  {
    title: 'Network Standards and Heuristic Reviews',
    desc: 'Implement standards and heuristic reviews of public infrastructure.',
    icon: '🛠️'
  },
  {
    title: 'Pioneering Gaming and Digital Collectibles',
    desc: 'Elevate the gaming experience and digital collectibles with innovative technology.',
    icon: '🎮'
  },
  {
    title: 'Enable Swift and Robust Development',
    desc: 'Enable robust and rapid development through an open ecosystem.',
    icon: '🚀'
  },
  {
    title: 'Community-Driven Governance',
    desc: 'Embrace a governance model powered by the community for the community.',
    icon: '🤝'
  }
];

const store = useStore();

const guilds = computed(() => store.state.guilds.guilds);
const proposals = computed(() => store.state.proposals.proposals);

onMounted(() => {
  if (!guilds.value.length) store.dispatch('guilds/fetchGuilds');
  if (!proposals.value.length) store.dispatch('proposals/fetchProposals');
});
</script>

<template>
  <div class="container mx-auto py-12 lg:py-20">
    <div
      class="mx-auto flex flex-col items-start justify-between py-5 sm:py-4 md:justify-start"
    >
      <div class="mx-auto">
        <h2 class="text-xl font-serif text-center tracking-tight sm:text-4xl">
          {{ title }}
        </h2>
        <div
          class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 lg:gap-x-8"
        >
          <div
            v-for="feature in features"
            :key="feature.title"
            class="max-w-xs mx-auto"
          >
            <p class="text-xl text-center mb-6">{{ feature.icon }}</p>
            <h3 class="text-base text-center leading-6 mb-3 font-serif">
              {{ feature.title }}
            </h3>
            <p class="text-sm text-center">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
