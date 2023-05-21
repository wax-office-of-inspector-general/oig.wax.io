
<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import CandidateCard from './CandidateCard.vue';

const store = useStore();

const candidates = computed(() => store.state.ballot.candidates);
const loading = computed(() => store.state.ballot.loading);

onMounted(() => {
  if (!candidates.value.length) store.dispatch('ballot/fetchCandidates');
});
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-10 px-6 lg:px-8 lg:py-18">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-xl font-bold font-serif tracking-tight sm:text-4xl">
            Our IG Candidates
          </h2>
          <p class="text-base text-font">
            This election is to decide the sixth Elected IG, who will serve an
            18-month term in Office, replacing rakeden.oig.
          </p>
        </div>
        <ul
          role="list"
          class="space-y-12 sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 nd:grid-cols-5 gap-4 sm:gap-x-10 sm:gap-y-8 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8"
        >
          <li v-for="candidate in candidates" :key="candidate.name">
            <CandidateCard :candidate="candidate" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
