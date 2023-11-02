<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import moment from 'moment';
import ButtonPrimary from '.@/components/button/ButtonPrimary.vue';

const store = useStore();

const evaluations = computed(() => store.state.evaluations.evaluations);

const topGuilds = (guilds) => {
  let top = guilds.sort((a, b) => b.score - a.score).slice(0, 20);

  return top.map((t) => t.guild).join(', ');
};

const tableHeaders = ['Timestamp', 'Threshold', 'Type', 'Top 21 Guilds'];

onMounted(() => {
  if (!evaluations.value.length) store.dispatch('evaluations/fetchEvaluations');
});
</script>

<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h2 class="text-xl font-serif tracking-tight text-primary">
          List of Evaluations
        </h2>
        <p class="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p class="mt-2 text-sm">
          Whenever a full evaluation concludes, we typically announce the final
          scores
          <a class="underline" href="https://waxoig.medium.com/"
            >on our medium blog</a
          >.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <ButtonPrimary
          href="https://www.notion.so/wax-oig/Guild-Ratings-0e51defdf10641748a253ccc7f5146b1"
          text="View full Rating"
        />
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  v-for="tableHeader in tableHeaders"
                  :key="tableHeader"
                  scope="col"
                  class="py-3.5 pl-4 pr-4 text-left text-sm font-bold font-serif sm:pl-0"
                >
                  {{ tableHeader }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="evaluation in evaluations" :key="evaluation.timestamp">
                <td class="whitespace-nowrap pr-5 py-4 text-sm">
                  {{
                    moment(evaluation.timestamp).format('YYYY-MM-DD, h:mm:ss a')
                  }}
                </td>
                <td
                  class="whitespace-nowrap pr-5 marker:py-4 text-sm text-gray-500"
                >
                  {{ parseFloat(evaluation.minimum / 10000) }} points
                </td>
                <td class="whitespace-nowrap pr-5 py-3 text-sm">
                  <span
                    v-if="evaluation.type === 0"
                    class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                    >Half</span
                  >
                  <span
                    v-else
                    class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30"
                    >Full</span
                  >
                </td>
                <td class="whitespace-nowrap pr-4 py-4 text-sm">
                  {{ topGuilds(evaluation.scores) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
