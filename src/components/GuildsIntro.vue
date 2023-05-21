<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, Transition } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
import ButtonPrimary from './button/ButtonPrimary.vue';
import ButtonText from './button/ButtonText.vue';
import GuildCardSmall from './guild/GuildCardSmall.vue';

const store = useStore();

const guilds = computed(() => store.state.guilds.guilds);
const fewGuilds = computed(() => store.state.guilds.fewGuilds);
const loading = computed(() => store.state.guilds.loading);

onMounted(() => {
  if (!guilds.value.length) store.dispatch('guilds/fetchGuilds');
});
</script>

<template>
  <div class="my-12 lg:my-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-4">
          <div class="relative lg:max-w-lg">
            <div
              v-if="loading"
              class="mx-auto flex h-60 justify-center items-center my-12"
            >
              <LoadingSpinner :content="'Loading Guilds'" />
            </div>
            <Transition>
              <div v-if="guilds.length && !loading">
                <div
                  class="mt-20 text-center mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-4"
                >
                  <div v-for="(guild, index) in fewGuilds" :key="index">
                    <GuildCardSmall :title="guild.producer" />
                  </div>
                </div>
                <div
                  class="text-center absolute bg-gradient-to-t from-[#fff] h-60 w-full bottom-0 left-0 z-30"
                >
                  <ButtonPrimary
                    href="#"
                    text="More about Guilds"
                    cssClass="absolute left-[50%] translate-x-[-50%] translate-y-5 bottom-0"
                  />
                </div>
              </div>
            </Transition> 
          </div>
        </div>
        <div>
          <div class="text-base text-font lg:max-w-lg">
            <h1
              class="mt-2 text-xl font-serif leading-snug text-font sm:text-4xl"
            >
              Explore our thriving Ecosystem
            </h1>
            <div class="max-w-xl">
              <p class="mt-6">
                Delve into the vibrant realm of WAX Guilds and witness the
                dynamic heartbeat of the ecosystem. These Guilds are not only
                validators but also pioneers, pushing the boundaries of
                innovation within the WAX Network. Immerse yourself in their
                technical expertise, community-driven initiatives, and
                groundbreaking contributions that shape the future of
                blockchain. Whether you're an investor, developer, or blockchain
                enthusiast, exploring the thriving Guilds will unveil a world of
                opportunities and inspire you to be part of the transformative
                journey. Join the movement and experience the power of
                collaboration in building a stronger and more inclusive
                decentralized ecosystem.
              </p>
              <p class="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>

          <div class="mt-10 flex">
            <ButtonText href="#" text="Learn more about Guilds" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
