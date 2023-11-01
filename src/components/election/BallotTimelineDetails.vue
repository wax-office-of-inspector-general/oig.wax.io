<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();

const ballot = computed(() => store.state.ballot.ballots);

onMounted(() => {
  if (!ballot.value.length) store.dispatch('ballot/fetchBallots', 1);
});

const currentBallot = computed(() => ballot.value[0]);

console.log(currentBallot.value);

const ballotStates = [
  {
    state: 1,
    title: 'Preparation',
    href: '#',
    desc: 'Prepare yourself and get familiar with guilds and the community'
  },
  {
    state: 2,
    title: 'Nominations',
    href: '#',
    desc: 'Nomiate someone or get nominated...'
  },
  {
    state: 4,
    title: 'Voting',
    href: '#',
    desc: 'The voting happens and the new winner will be announced at the end'
  }
];
</script>

<template>
  <div class="mt-12">
    <div class="py-12 sm:py-0">
      <div class="mb-8 max-w-2xl lg:mx-0">
        <h2 class="text-xl font-serif tracking-tight text-primary sm:text-4xl">
          Election Timeline
        </h2>
      </div>
      <div>
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
                  v-if="ballotState.state === 1"
                  class="flex flex-col text-sm mb-2"
                >
                  <div
                    class="bg-secondary-50 px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-2"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-tertiary-50'
                        : 'bg-secondary-50'
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

                <div v-if="ballotState.state === 2">
                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-2"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-primary-50'
                        : 'bg-secondary-50'
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
                        ? 'bg-primary-50'
                        : 'bg-secondary-50'
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

                <div v-if="ballotState.state === 4">
                  <div
                    class="px-3.5 py-2.5 rounded-lg flex flex-col text-sm mb-3"
                    :class="
                      ballotState.state <= currentBallot.state
                        ? 'bg-primary-50'
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
                      ballotState.state <= currentBallot.state
                        ? 'bg-primary-50'
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
