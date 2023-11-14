<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { shallowRef, defineAsyncComponent } from 'vue';
import SimpleHero from '../components/hero/SimpleHero.vue';

const headline = 'About this site';
const subline =
  'Safe and Sound, no tracking and no user footprints';

const tabs = shallowRef({
  'Privacy Policy': defineAsyncComponent(() =>
    import('../components/legal/PrivacyPolicy.vue')
  ),
  'Terms & Service': defineAsyncComponent(() =>
    import('../components/legal/TermsService.vue')
  )
});
</script>
<template>
  <SimpleHero :title="headline" :desc="subline" />

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