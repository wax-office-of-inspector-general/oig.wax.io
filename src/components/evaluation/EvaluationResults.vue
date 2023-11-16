<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import moment from 'moment';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import EvaluationActionList from '@/components/evaluation/EvaluationActionList.vue';

const store = useStore();

const evaluations = computed(() => store.state.evaluations.evaluations);

const topGuilds = (evaluation) => {
  let top = evaluation.scores
    .sort((a, b) => b.score - a.score)
    .filter((g) => g.score > evaluation.minimum);

  return top.map((t, idx) => `#${idx + 1} ${t.guild}`).join(', ');
};

const standbyCount = (evaluation) => {
  let passedGuilds = evaluation.scores.filter(
    (g) => g.score > evaluation.minimum
  );
  return passedGuilds.length - 21;
};

onMounted(() => {
  if (!evaluations.value.length) store.dispatch('evaluations/fetchEvaluations');
});
</script>

<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h2 class="text-lg font-serif tracking-tight text-primary">
          Latest Reviews
        </h2>
        <p class="mt-4 text-sm">
          All Guild Reviews since January 2023 are listed below. That's when the processing of guilds scores has moved on-chain. For previous review please visit the respective guild archives on notion.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <a
          target="_blank"
          href="https://www.notion.so/wax-oig/Guild-Ratings-0e51defdf10641748a253ccc7f5146b1"
          class="inline-block rounded-md whitespace-nowrap bg-primary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-primary-700 hover:text-white focus-visible:outline-none outline-none"
        >
          Full Reviews
          <span class="ml-1" aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>

    <div class="mt-6 flow-root bg-white rounded-md">
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="evaluation in evaluations"
          :key="evaluation.id"
          class="relative flex justify-between flex-col sm:flex-row py-5 px-5"
        >
          <div class="flex gap-x-4 pr-6 sm:w-1/4 md:w-1/5 sm:flex-none">
            <div class="min-w-0 flex-auto">
              <p
                class="text-sm font-serif tracking-5 font-bold leading-6 text-gray-900"
              >
                {{ moment(evaluation.timestamp).startOf('day').fromNow() }}
              </p>
              <p class="mt-2 flex text-xs leading-5 text-gray-500">
                <span
                  v-if="evaluation.type === 1"
                  class="inline-flex items-center rounded-md bg-secondary-50 px-2 py-1 text-xs font-medium text-font"
                  >Tech Review</span
                >
                <span
                  v-else
                  class="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-font"
                  >Full Review</span
                >
              </p>
            </div>
          </div>
          <div
            class="mt-4 sm:mt-0 flex items-center justify-between gap-x-4 sm:w-3/4 md:w-4/5 sm:flex-none"
          >
            <div class="sm:block">
              <p class="text-sm leading-6 text-font">Passing Guilds</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                {{ topGuilds(evaluation) }}
              </p>
              <p class="mt-3 text-sm leading-6 text-font">Standby Count</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                {{ standbyCount(evaluation) }} Guilds
              </p>
            </div>
            <a
              :href="'https://www.notion.so/wax-oig/Guild-Ratings-0e51defdf10641748a253ccc7f5146b1'"
            >
              <ChevronRightIcon
                class="h-5 w-5 flex-none text-primary/50"
                aria-hidden="true"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <EvaluationActionList />
    </div>
  </div>
</template>
