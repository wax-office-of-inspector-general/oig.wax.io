<template>
  <div
    class="divide-y divide-gray-200 overflow-hidden rounded-lg border-gray-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
  >
    <div
      v-for="(action, actionIdx) in actions"
      :key="action.title"
      :class="[
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary'
      ]"
    >
      <div>
        <span
          :class="[
            action.iconBackground,
            action.iconForeground,
            'inline-flex rounded-lg p-3 ring-4 ring-white'
          ]"
        >
          <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-base font-bold leading-6 text-gray-900">
          <a :href="action.href" class="focus:outline-none" target="_blank">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true" />
            {{ action.title }}
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          {{ action.desc }}
        </p>
      </div>
      <span
        class="pointer-events-none absolute right-6 top-6 text-primary group-hover:text-gray-400"
        aria-hidden="true"
      >
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script setup>
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  TrophyIcon
} from '@heroicons/vue/24/outline';

const actions = [
  {
    title: 'Latest Reviews',
    desc: 'View the latest guilds rating and their respective score sheets.',
    href: 'https://www.notion.so/wax-oig/Guild-Ratings-0e51defdf10641748a253ccc7f5146b1',
    icon: TrophyIcon,
    iconForeground: 'text-primary',
    iconBackground: 'bg-secondary-50'
  },
  {
    title: 'Guideline Versions',
    desc: 'Learn more about the current guidelines and how the scoring of guilds exactly works.',
    href: 'https://www.notion.so/wax-oig/Versioned-Guidelines-a83f99e6acd0444ab7cec9419ca4eff0',
    icon: ShieldCheckIcon,
    iconForeground: 'text-primary',
    iconBackground: 'bg-secondary-50'
  },
  {
    title: 'Report Submissions',
    desc: 'Guilds report their progress every 6 weeks for a review. Those reports can be viewed publicly on the OIG github repository.',
    href: 'https://github.com/wax-office-of-inspector-general/waxguilds',
    icon: DocumentTextIcon,
    iconForeground: 'text-primary',
    iconBackground: 'bg-secondary-50'
  },
  {
    title: 'Governance Chat',
    desc: 'Get engaged and start networking on WAX. Learn about WAX and directly talk to guilds, developers and the WAX OIG.',
    href: 'https://t.me/waxgov',
    icon: ChatBubbleLeftRightIcon,
    iconForeground: 'text-primary',
    iconBackground: 'bg-secondary-50'
  }
];
</script>
