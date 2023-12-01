<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CandidateCard from '@/components/election/CandidateCard.vue';

const store = useStore();

const isNominationOpen = computed(
  () => store.getters['ballot/isNominationOpen']
);
const isVotingOpen = computed(() => store.getters['ballot/isVotingOpen']);
const isVotingClosed = computed(() => store.getters['ballot/isVotingClosed']);

const candidatesSorted = computed(
  () => store.getters['ballot/candidatesSorted']
);

const ballot = computed(() => store.state.ballot.ballots);

const content = {
  isNominationOpen: {
    headline: 'Nominate Now!',
    subline: 'Engage in WAX governance by nominating your top candidate.'
  },
  isVotingOpen: {
    headline: 'Cast Your Vote!',
    subline:
      'Shape the future of WAX through blockchain governance. Your voice matters!'
  },
  isVotingClosed: {
    headline: 'Winner Announced!',
    subline:
      'The election has concluded. A new IG has been elected - Exciting times ahead!'
  }
};

onMounted(() => {
  if (!ballot.value.length) store.dispatch('ballot/fetchBallots');
});
</script>

<template>
  <div class="container">
    <div
      class="container grid grid-cols-1 md:grid-cols-5 gap-12 bg-primary-50 py-12 sm:py-16"
    >
      <div class="col-span-5 md:col-span-3 flex flex-col justify-center">
        <template v-if="isNominationOpen">
          <h2 class="text-2xl font-bold tracking-tight text-primary">
            {{ content.isNominationOpen.headline }}
          </h2>
          <p
            class="mt-4 text-md max-w-2xl leading-8"
            v-html="content.isNominationOpen.subline"
          ></p>
        </template>
        <template v-if="isVotingOpen">
          <h2 class="text-2xl font-bold tracking-tight text-primary">
            {{ content.isVotingOpen.headline }}
          </h2>
          <p
            class="mt-4 text-md max-w-2xl leading-8"
            v-html="content.isVotingOpen.subline"
          ></p>
        </template>
        <template v-if="isVotingClosed">
          <h2 class="text-2xl font-bold tracking-tight text-primary">
            {{ content.isVotingClosed.headline }}
          </h2>
          <p
            class="mt-4 text-md max-w-2xl leading-8"
            v-html="content.isVotingClosed.subline"
          ></p>
        </template>
      </div>
      <div v-if="isVotingClosed" class="col-span-5 md:col-span-2">
        <template v-if="isVotingClosed && candidatesSorted.length">
          <CandidateCard
            class="transform rotate-[5deg] translate-x-6 md:translate-x-0 max-w-[250px]"
            :candidate="candidatesSorted[0]"
          />
        </template>
      </div>
    </div>
  </div>
</template>
