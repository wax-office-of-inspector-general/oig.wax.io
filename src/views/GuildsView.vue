<script setup>
import SimpleHero from '@/components/hero/SimpleHero.vue';
import GuildActionList from '@/components/guild/GuildActionList.vue';

import {
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  RectangleGroupIcon,
  CommandLineIcon
} from '@heroicons/vue/24/outline';

const headline = 'Guilds on WAX';
const subline =
  'The heartbeat of the ecosystem, each with unique and valuable contributions to a flourish ecosystem.';

const scoreCategories = [
  {
    label: 'Technical Operations',
    scoreP: 40
  },
  {
    label: 'Product Development',
    scoreP: 30
  },
  {
    label: 'Ecosystem Contributions',
    scoreP: 20
  },
  {
    label: 'Community Support',
    scoreP: 10
  }
];
</script>
<template>
  <SimpleHero :title="headline" :desc="subline" />

  <div class="container pt-20 pb-4">
    <div class="mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2
          class="max-w-xl text-2xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Anatomy of a WAX Guild
        </h2>

        <div class="max-w-2xl mt-4 prose">
          Welcome to the lively WAX ecosystem, where the blockchain ecosystem
          thrives with vitality and innovation. The WAX Guilds can be
          metaphorically described as the anatomical structure of the blockchain
          ecosystem, embodying various components essential for the health and
          vitality of the network.
        </div>
      </div>
    </div>
  </div>

  <div class="container pt-4 pb-16">
    <div class="mt-10 grid grid-cols-2 md:grid-cols-2 divide-x px-4">
      <div class="py-10 px-10 flex flex-col items-center">
        <div class="flex flex-row mb-8">
          <CommandLineIcon class="w-8 h-8 text-primary opacity-80" />
          <h3 class="ml-3 leading-9 text-md">Technical Operations</h3>
        </div>
        <p>Producing blocks and serving public infrastructure</p>
        <ul class="hidden mt-5 text-sm leading-7 list-disc">
          <li>Non-stop producing of blocks</li>
          <li>Serving public RPC & History APIs</li>
          <li>Securing and enhancing network protocols</li>
          <li>Providing QoL APIs for rapid development</li>
        </ul>
      </div>
      <div class="py-10 px-10 flex flex-col items-center">
        <div class="flex flex-row mb-8">
          <BeakerIcon class="w-8 h-8 text-primary opacity-80" />
          <h3 class="ml-3 leading-9 text-md">Product Development</h3>
        </div>
        <p>Developing new products and services on WAX</p>
        <ul class="hidden mt-5 text-sm leading-7 list-disc">
          <li>Product and Services on popular demand</li>
          <li>Innovating on-chain activity and usage</li>
          <li>Provide organic growth for a vital community</li>
        </ul>
      </div>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-2 divide-x border-t border-t-gray-200 px-10"
    >
      <div class="py-10 px-10 flex flex-col items-center">
        <div class="flex flex-row mb-8">
          <RectangleGroupIcon class="w-8 h-8 text-primary opacity-80" />
          <h3 class="ml-3 leading-9 text-md">Ecosystem Contributions</h3>
        </div>
        <p>Enhancing and Growing the networks ecosystem</p>
        <ul class="hidden mt-5 text-sm leading-7 list-disc">
          <li>Supporting the networks need and demand</li>
          <li>On-boarding developers and digital artists</li>
          <li>Efforts that add value to the community</li>
        </ul>
      </div>
      <div class="py-10 px-10 flex flex-col items-center">
        <div class="flex flex-row mb-8">
          <ChatBubbleLeftRightIcon class="w-8 h-8 text-primary opacity-80" />
          <h3 class="ml-3 leading-9 text-md">Community Support</h3>
        </div>
        <p>Supporting and Educating builder on WAX</p>
        <ul class="hidden mt-5 text-sm leading-7 list-disc">
          <li>QoL tools and services for developers</li>
          <li>Serving public RPC & History APIs</li>
          <li>Securing and enhancing network protocols</li>
          <li>Providing QoL APIs for rapid development</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 md:mt-20">
      <div class="grid grid-cols-3 gap-x-8">
        <div class="col-span-2 mt-2 prose">
          <p>
            The WAX Guild, akin to the intricate anatomy of a living organism,
            fulfills diverse functions that collectively contribute to the
            vibrancy and resilience of the blockchain ecosystem. In the realm of
            <strong>technical operations</strong>, the Guild acts as the engine,
            non-stop producing blocks and serving essential public
            infrastructure. With a commitment to securing and enhancing network
            protocols, the Guild ensures a robust foundation for WAX.
            Additionally, it provides Quality of Life (QoL) APIs, facilitating
            rapid development and contributing to the seamless functionality of
            the blockchain.
          </p>
          <p>
            A significant aspect of the Guild's role lies in
            <strong>product development</strong>, where it serves as the
            creative nucleus. By continuously developing new products and
            services on WAX, the Guild responds to the dynamic demands of the
            community. Innovating on-chain activities and usage, the Guild
            becomes the catalyst for organic growth, fostering a vital and
            thriving community.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <dl
        class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"
      >
        <div
          v-for="(cat, catIdx) in scoreCategories"
          :key="catIdx"
          class="flex flex-col-reverse gap-y-3 border-l border-primary/20 pl-6"
        >
          <dt class="text-sm leading-7 text-font font-serif">
            {{ cat.label }}
          </dt>
          <dd class="text-3xl font-semibold tracking-tight text-primary">
            {{ cat.scoreP }} <span class="text-md">%</span>
          </dd>
        </div>
      </dl>
    </div>

    <div class="mt-12 md:mt-20">
      <div class="grid grid-cols-3 gap-x-8">
        <div class="col-span-2 mt-2 prose">
          <p>
            <strong>Ecosystem contributions</strong> form another crucial facet
            of the Guild's anatomy. It acts as a nurturing force, enhancing and
            growing the network's ecosystem. By supporting the evolving needs
            and demands of the network, onboarding developers and digital
            artists, and consistently making efforts that add value to the
            community, the Guild becomes an indispensable element for the
            sustained health of WAX.
          </p>
          <p>
            <strong>Community support</strong> is the beating heart of the
            Guild's anatomy. Dedicated to supporting and educating builders on
            WAX, the Guild provides Quality of Life (QoL) tools and services for
            developers, serves public RPC & History APIs, and works ceaselessly
            to secure and enhance network protocols. This holistic approach to
            community support ensures that the WAX Guild not only produces
            blocks but also fosters an environment where the community thrives,
            learns, and collaborates, making it the lifeblood of the WAX
            blockchain ecosystem.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12 md:mt-20 mb-10">
      <GuildActionList />
    </div>
  </div>
</template>
