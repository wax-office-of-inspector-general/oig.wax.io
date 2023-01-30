<script setup>
import {
  UserGroupIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon
} from '@heroicons/vue/24/outline';

const features = [
  {
    title: 'Effortlessly build dApps on WAX',
    desc: 'WAX is the ultimate platform for building and deploying decentralized applications. Its fast and free transactions, scalable architecture, and user-friendly tools make it easy for developers of all skill levels to create amazing dApps.',
    icon: CubeTransparentIcon,
    anchor: '#'
  },
  {
    title: 'Join the WAX community and thrive',
    desc: 'The WAX community is a vibrant and supportive group of developers and users who are all working towards a common goal: building the decentralized future. With a wealth of resources, events, and support available, WAX is the perfect place to learn, grow, and thrive as a developer or user. Join us today and be a part of something special!',
    icon: UserGroupIcon,
    anchor: '#'
  },
  {
    title: 'Experience the future of governance',
    desc: 'WAX is leading the charge in decentralized governance with its transparent and democratic model. With WAX, you can have confidence that your voice will be heard and that the platform will always be working for the benefit of its users. Experience the future of blockchain governance with WAX and become part of a remarkable ecosystem.',
    icon: BuildingLibraryIcon,
    anchor: '#'
  }
];
</script>

<template>
  <div class="my-12 lg:my-20">
    <div
      class="mx-auto flex flex-col max-w-7xl items-start justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8"
    >
      <h3
        class="text-xl mx-auto max-w-xl lg:max-w-2xl font-bold text-center font-serif text-tertiary leading-snug"
      >
        Become part of the most proven blockchain ecosystem
      </h3>
      <div class="grid grid-rows-1 lg:grid-cols-3 mt-16 gap-y-10 lg:gap-x-16">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="prose flex flex-col items-center"
        >
          <span
            class="inline-flex h-20 w-20 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
          >
            <component
              :is="feature.icon"
              class="h-12 w-12 text-font"
              aria-hidden="true"
            />
          </span>
          <h4 class="font-serif text-md text-center mx-10 font-bold mb-4">
            {{ feature.title }}
          </h4>
          <p class="leading-normal text-center">
            {{ feature.desc }}
          </p>
          <a
            href="#"
            class="font-serif mt-2 text-sm no-underline font-medium text-tertiary lg:mt-4"
          >
            Learn more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
