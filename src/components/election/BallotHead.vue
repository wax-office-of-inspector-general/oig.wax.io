<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();

const ballot = computed(() => store.state.ballot.ballots);

onMounted(() => {
  if (!ballot.value.length) store.dispatch('ballot/fetchBallots');
});

const currentBallot = computed(() => ballot.value[0]);

const ballotStates = [
  {
    state: 1,
    title: 'Preparation',
    href: '#',
    desc: 'Nominate someone or get nominated'
  },
  {
    state: 2,
    title: 'Nomination',
    href: '#',
    desc: 'Nominate someone or get nominated'
  },
  {
    state: 4,
    title: 'Voting',
    href: '#',
    desc: 'The voting happens and the new winner will be announced at the end'
  },
  {
    state: 5,
    title: 'Concluded',
    href: '#',
    desc: 'The election winner is announced'
  }
];

const currentPhase = (ballot) => {
  let currentState = ballotStates.filter((b) => b.state >= ballot.state);
  return currentState.shift().title;
};
</script>
<template>
  <div
    v-if="currentBallot"
    class="mt-8 md:mt-12 rounded-md drop-shadow bg-secondary-50"
  >
    <div
      class="p-4 md:p-5 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x"
    >
      <div class="mr-auto py-4 md:py-0 md:pr-6">
        <p class="text-xs mb-2 text-font/50 font-bold">Ballot ID</p>
        <p class="text-base font-bold mb-2">{{ currentBallot.ballot }}</p>
      </div>
      <div class="mx-auto w-full py-4 md:py-0 md:px-6">
        <p class="text-xs mb-2 text-font/50 font-bold">Description</p>
        <p class="text-base">{{ currentBallot.description }}</p>
      </div>
      <div class="md:ml-auto py-4 md:py-0 md:pl-6">
        <p class="text-xs whitespace-nowrap mb-2 text-font/50 font-bold">
          Phase
        </p>
        <p class="text-base font-bold">{{ currentPhase(currentBallot) }}</p>
      </div>
    </div>
  </div>
</template>
