<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import SmallHeader from '../components/hero/SmallHeader.vue';
import { shallowRef, defineAsyncComponent } from 'vue';

const title = 'Guild Reviews';
const desc = `We regularly asses every guilds positive contributions to the network and heuristically analyse their performance and SLA's.<br />View our recent evaluation reports or learn how it works.`;

const tabs = shallowRef({
  'Recent Evaluations': defineAsyncComponent(() =>
    import('../components/evaluation/EvaluationResults.vue')
  ),
  'How it works': defineAsyncComponent(() =>
    import('../components/evaluation/EvaluationProcess.vue')
  )
});
</script>

<template>
  <SmallHeader :title="title" :desc="desc" />

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
              'px-12 py-2.5 text-sm font-serif leading-5',
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
          :class="['py-12', 'focus:outline-none outline-none']"
        >
          <component :is="tab" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
