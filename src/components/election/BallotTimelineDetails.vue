<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();

const ballot = computed(() => store.state.ballot.ballots);

onMounted(() => {
  if (!ballot.value.length) store.dispatch('ballot/fetchBallots');
});

const currentBallot = computed(() => ballot.value[0]);

console.log(currentBallot.value);

const ballotStates = [
  {
    state: 2,
    title: 'Preparation',
    href: '#',
    desc: 'Prepare yourself and get familiar with guilds and the community'
  },
  {
    state: 3,
    title: 'Nominations',
    href: '#',
    desc: 'Nomiate someone or get nominated...'
  },
  {
    state: 5,
    title: 'Voting',
    href: '#',
    desc: 'The voting happens and the new winner will be announced at the end'
  }
];
</script>

<template>
  <div class="mt-8 md:mt-12">
    <div class="border border-gray-200 drop-shadow-sm bg-white rounded-md">
      <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
        <div
          class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
        >
          <div class="ml-4 mt-6">
            <h3 class="text-xl font-semibold leading-6">Timeline</h3>
            <p class="mt-3 text-sm text-gray-500">
              After the election is before the election! All dates are set in
              <strong>UTC</strong> time.
            </p>
          </div>
        </div>
      </div>

      <div class="p-6">
        <div v-if="currentBallot">
          <div
            class="mx-auto py-2 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <div v-for="ballotState in ballotStates" :key="ballotState.state">
              <time
                datetime="2021-08"
                class="flex items-center text-sm font-serif font-bold leading-6 text-primary-800"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 flex-none"
                  :class="
                    ballotState.state <= currentBallot.state
                      ? 'h-2 w-2'
                      : 'h-4 w-4 animate-ping'
                  "
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>

                {{ ballotState.title }}

                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <div
                class="mt-4 text-base leading-8 tracking-tight text-gray-900"
              >
                <div
                  v-if="ballotState.state === 2"
                  class="flex flex-col text-sm mb-2"
                >
                  <div
                    class="bg-secondary-50 px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-2"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-secondary-50'
                        : 'bg-green-50'
                    "
                  >
                    <span
                      class="text-xs font-semibold text-font/50 tracking-wide uppercase leading-snug"
                      >End</span
                    >
                    <span
                      class="leading-normal font-serif text-center text-base my-3"
                      >until nominations</span
                    >
                  </div>
                </div>

                <div v-if="ballotState.state === 3">
                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-2"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-green-50'
                        : 'bg-primary-50'
                    "
                  >
                    <span
                      class="text-xs font-semibold text-font/50 tracking-wide uppercase leading-snug"
                      >Start</span
                    >
                    <span
                      class="leading-normal font-serif text-center text-base my-3"
                      >{{ $filters.localeDate(currentBallot.nmn_open) }}</span
                    >
                  </div>

                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-3"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-green-50'
                        : 'bg-primary-50'
                    "
                  >
                    <span
                      class="text-xs font-semibold text-font/50 tracking-wide uppercase leading-snug"
                      >End</span
                    >
                    <span
                      class="leading-normal font-serif text-center text-base my-3"
                      >{{ $filters.localeDate(currentBallot.nmn_close) }}</span
                    >
                  </div>
                </div>

                <div v-if="ballotState.state >= 4">
                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-3"
                    :class="
                      ballotState.state >= currentBallot.state
                        ? 'bg-green-50'
                        : 'bg-secondary-50'
                    "
                  >
                    <span
                      class="text-xs font-semibold text-font/50 tracking-wide uppercase leading-snug"
                      >Start</span
                    >
                    <span
                      class="leading-normal font-serif text-center text-base my-3"
                      >{{ $filters.localeDate(currentBallot.vote_open) }}</span
                    >
                  </div>
                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-2"
                    :class="
                      ballotState.state >= currentBallot.state
                        ? 'bg-green-50'
                        : 'bg-secondary-50'
                    "
                  >
                    <span
                      class="text-xs font-semibold text-font/50 tracking-wide uppercase leading-snug"
                      >End</span
                    >
                    <span
                      class="leading-normal font-serif text-center text-base my-3"
                      >{{ $filters.localeDate(currentBallot.vote_close) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
