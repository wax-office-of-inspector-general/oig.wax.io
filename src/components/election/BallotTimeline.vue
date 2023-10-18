<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid';
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
  <div class="">
    <div class="py-12 sm:py-0">
      <div class="mb-12">
        <nav aria-label="Progress" v-if="currentBallot">
          <ol
            role="list"
            class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
          >
            <li
              v-for="(ballotState, idx) in ballotStates"
              :key="ballotState.state"
              class="relative md:flex md:flex-1"
            >
              <div
                v-if="ballotState.state <= currentBallot.state"
                :href="ballotState.href"
                class="group flex w-full items-center flex-wrap"
              >
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-indigo-800"
                  >
                    <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span class="ml-4 text-sm font-medium text-primary">
                    {{ ballotState.title }}
                  </span>
                </span>
              </div>
              <div
                v-else-if="ballotState.state >= currentBallot.state"
                :href="ballotState.href"
                class="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span
                  class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary"
                >
                  <span class="text-primary">{{ idx + 1 }}</span>
                </span>
                <span class="ml-4 text-sm font-medium text-primary">{{
                  ballotState.title
                }}</span>
              </div>
              <div
                v-else
                :href="ballotState.href"
                class="group flex items-center"
              >
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 group-hover:border-gray-400"
                  >
                    <span class="text-gray-500 group-hover:text-gray-900">{{
                      idx + 1
                    }}</span>
                  </span>
                  <span
                    class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"
                    >{{ ballotState.title }}</span
                  >
                </span>
              </div>
              <template v-if="idx !== ballotState.length - -1">
                <!-- Arrow separator for lg screens and up -->
                <div
                  class="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vector-effect="non-scaling-stroke"
                      stroke="currentcolor"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </template>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>
