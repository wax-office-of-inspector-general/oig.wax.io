<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import ElectionHero from '../components/hero/ElectionHero.vue';
import { shallowRef, defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router';

const tabs = shallowRef({
  Election: defineAsyncComponent(() =>
    import('../components/election/BallotView.vue')
  ),
  'Candidate Requirements': defineAsyncComponent(() =>
    import('../components/election/CandidateRequirements.vue')
  )
});
</script>

<template>
  <ElectionHero />

  <div class="container pt-12 pb-16">
    <TabGroup>
      <TabList class="flex items-start space-x-1 border-b border-primary/10">
        <Tab
          v-for="tab in Object.keys(tabs)"
          as="template"
          :key="tab"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'px-6 md:px-12 py-2.5 text-sm font-serif leading-5',
              'focus:outline-none outline-none',
              selected
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-primary hover:font-bold'
            ]"
          >
            {{ tab }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(tab, idx) in Object.values(tabs)"
          :key="idx"
          :class="['focus:outline-none outline-none']"
        >
          <component :is="tab" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
  <RouterView />
</template>
