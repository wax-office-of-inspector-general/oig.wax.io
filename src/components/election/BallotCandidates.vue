<script setup>
import CandidateCard from './CandidateCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const candidates = computed(() => store.state.ballot.candidates);
</script>
<template>
  <div
    class="border border-gray-200 drop-shadow-sm bg-white rounded-md mt-8 md:mt-12"
  >
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <div
        class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
      >
        <div class="ml-4 mt-6">
          <h3 class="text-xl font-semibold leading-6">Candidates</h3>
          <p class="mt-3 text-sm text-gray-500">
            Cast your vote! Decide who will be the next IG.
          </p>
        </div>
      </div>
    </div>
    <div class="p-6">
      <ul
        v-if="candidates.length"
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      >
        <li
          v-for="candidate in candidates"
          :key="candidate.name"
          class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-secondary-50 text-center shadow"
        >
          <CandidateCard :candidate="candidate" />
        </li>
      </ul>
      <div v-else>
        <p>No candidates here yet.</p>
      </div>
    </div>
  </div>
</template>
