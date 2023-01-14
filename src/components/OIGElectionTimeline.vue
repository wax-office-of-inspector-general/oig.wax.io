<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-10 px-6 sm:py-12 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="font-bold tracking-tight text-tertiary font-serif sm:text-xl"
        >
          Election Timeline
        </h2>
        <p
          v-if="currentElection"
          class="mx-auto mt-4 max-w-xl text-base leading-snug text-font"
        >
          {{ currentElection.title }}
        </p>
        <p
          v-if="currentElection"
          class="mx-auto mt max-w-xl font-bold text-base leading-8 text-font"
        >
          Ballot: {{ currentElection.ballot }}
        </p>
      </div>
      <dl
        v-if="currentElection"
        class="mt-10 mx-32 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-16"
      >
        <div>
          <div class="relative bg-secondary p-7">

            <span
              class="absolute top-4 right-4 h-4 w-4 bg-tertiary rounded-full animate-ping duration-1000 delay-500"
            ></span>
            <dt>
              <p
                class="text-md font-bold font-serif leading-8 text-font mb-5"
              >
                Nomination Period
              </p>
              <p class="text-base flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="font-serif text-xs font-bold mb-1">Starts</span>
                  <span>{{ new Date(currentElection.nmn_open).toLocaleString() }}</span>
                </div>
                <div>
                  <span aria-hidden="true" class="text-md"> &rarr;</span>
                </div>
                <div class="flex flex-col">
                  <span class="ont-serif text-xs font-bold mb-1">Ends</span>
                  <span>{{ new Date(currentElection.nmn_close).toLocaleString() }}</span>
                </div>
              </p>
            </dt>
          </div>
        </div>

        <div>
          <div class="relative bg-secondary p-7 opacity-50">
            <dt>
              <p
                class="text-md font-bold font-serif leading-8 text-font mb-5"
              >
                Voting Period
              </p>
              <p class="text-base flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="font-serif text-xs font-bold mb-1">Starts</span>
                  <span>{{ new Date(currentElection.vote_open).toLocaleString() }}</span>
                </div>
                <div>
                  <span aria-hidden="true" class="text-md"> &rarr;</span>
                </div>
                <div class="flex flex-col">
                  <span class="ont-serif text-xs font-bold mb-1">Ends</span>
                  <span>{{ new Date(currentElection.vote_close).toLocaleString() }}</span>
                </div>
              </p>
            </dt>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const store = useStore();

const election = computed(() => store.state.election.elections);
const loading = computed(() => store.state.election.loading);

onMounted(() => {
  if (!election.value.length) store.dispatch("election/fetchElection");
});

const currentElection = computed(() => election.value[0]);
console.log(currentElection);
</script>
