<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import GuildCardSmall from './guild/GuildCardSmall.vue';

const store = useStore();

const oigs = computed(() => store.state.oig.oigs);

onMounted(() => {
  if (!oigs.value.length) store.dispatch('oig/fetchOigs');
});
</script>
<template>
  <div>
    <div class="container py-8 lg:py-12">
      <div class="text-center">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-xl font-serif tracking-tight text-primary">
            The current IGs
          </h2>
          <p class="mt-4 text-base max-w-2xl mx-auto">
            Elections are held every six months, with each Inspector General
            serving an 18-month term. The current active IG's are the following:
          </p>
        </div>
        <div class="lg:col-span-2 mt-12 px-12">
          <ul
            role="list"
            class="space-y-12 sm:grid grid-cols-3 sm:gap-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="oig in oigs" :key="oig.id">
              <GuildCardSmall :title="oig.ig" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
