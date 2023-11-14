<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import SimpleHero from '@/components/hero/SimpleHero.vue';
import { shallowRef, defineAsyncComponent } from 'vue';

const title = 'Guild Reviews';
const desc = `Explore the latest Guild Reviews to uncover how WAX blockchain guilds excel in technical operations, innovation, and community engagement.`;

const tabs = shallowRef({
  'Guild Reviews': defineAsyncComponent(() =>
    import('../components/evaluation/EvaluationResults.vue')
  ),
  'The Review Process': defineAsyncComponent(() =>
    import('../components/evaluation/EvaluationProcess.vue')
  )
});
</script>

<template>
  <SimpleHero :title="title" :desc="desc" />

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
