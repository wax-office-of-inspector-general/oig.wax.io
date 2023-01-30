<script setup>
import {
  UserGroupIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon
} from '@heroicons/vue/24/outline';

const stats = [
  {
    num: '33',
    desc: 'Active Guilds',
    icon: CubeTransparentIcon,
    anchor: '#'
  },
  {
    num: '500+',
    desc: 'yearly Guild Reports',
    icon: UserGroupIcon,
    anchor: '#'
  },
  {
    num: '3',
    desc: 'IGs',
    icon: BuildingLibraryIcon,
    anchor: '#'
  }
];
</script>

<template>
  <div class="bg-primary my-14 lg:my-24 py-16">
    <div
      class="mx-auto flex flex-col items-start justify-between px-4 sm:px-6 sm:py-4 md:justify-start lg:px-8"
    >
      <h3 class="text-lg mx-auto font-bold text-center font-serif leading-snug">
        Governance Stats
      </h3>
      <div
        class="mt-10 text-center mx-auto grid sm:max-w-3xl grid-cols-3 gap-8 sm:gap-20"
      >
        <div v-for="(stat, index) in stats" :key="index">
          <div class="flex flex-col">
            <dt
              class="order-2 mt-2 text-xs sm:text-sm font-serif font-medium leading-normal sm:leading-6"
            >
              {{ stat.desc }}
            </dt>
            <dd
              class="order-1 text-xl sm:text-2xl font-bold tracking-tight text-tertiary"
            >
              {{ stat.num }}
            </dd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
