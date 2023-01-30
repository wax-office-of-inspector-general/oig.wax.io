<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const store = useStore();

const guilds = computed(() => store.state.guilds.guilds);
const fewGuilds = computed(() => store.state.guilds.fewGuilds);
const loading = computed(() => store.state.guilds.loading);

onMounted(() => {
  if (!guilds.value.length) store.dispatch('guilds/fetchGuilds');
});
</script>

<template>
  <div class="my-14 lg:my-24 py-10">
    <div
      class="relative mx-auto flex flex-col items-start justify-between px-4 sm:px-6 sm:py-4 md:justify-start lg:px-8"
    >
      <h3 class="text-lg mx-auto font-bold text-center font-serif leading-snug">
        Explore our thriving Ecosystem
      </h3>
      <div v-if="loading" class="mx-auto my-12">
        <LoadingSpinner :content="'Loading Guilds'" />
      </div>
      <div
        class="mt-10 text-center mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10"
      >
        <div v-for="(guild, index) in fewGuilds" :key="index">
          <div class="flex flex-col">
            <dt
              class="bg-primary border-primary border mt-2 py-5 px-7 text-sm font-serif font-medium text-tertiary leading-6"
            >
              {{ guild.producer }}
            </dt>
          </div>
        </div>
      </div>
      <div
        class="text-center absolute bg-gradient-to-t from-[#fff] h-60 w-full bottom-0 left-0"
      >
        <a
          href="#"
          class="absolute left-[50%] translate-x-[-50%] bottom-4 mx-auto block rounded-lg bg-tertiary px-5 py-2 text-sm font-serif font-normal leading-7 text-white shadow-sm hover:bg-indigo-700 hover:ring-indigo-700"
        >
          More about Guilds{{ ' ' }}
          <span class="ml-2 text-white text-base" aria-hidden="true"
            >&rarr;</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
