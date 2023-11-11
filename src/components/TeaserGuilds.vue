<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
import ButtonText from '@/components/button/ButtonText.vue';
import GuildCardSmall from './guild/GuildCardSmall.vue';

const store = useStore();

const guilds = computed(() => store.state.guilds.guilds.slice(0, 15));
const loading = computed(() => store.state.guilds.loading);

onMounted(() => {
  if (!guilds.value.length) store.dispatch('guilds/fetchGuilds');
});
</script>

<template>
  <div class="py-12 lg:py-20">
    <div class="mx-auto container">
      <div
        class="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0"
      >
        <div>
          <div class="text-base text-font text-center max-w-xl mx-auto">
            <h1
              class="mt-2 text-xl font-serif leading-snug text-font sm:text-4xl"
            >
              Explore a flourish blockchain Ecosystem
            </h1>
            <div class="">
              <p class="mt-6">
                Find out more about WAX Guilds, the core of this dynamic
                ecosystem. These Guilds are more than validators; they're
                innovators, driving progress in the WAX Network.
              </p>
              <p class="mt-6">
                Dive into their technical operations, community projects, and
                other contributions shaping the blockchain's future. Whether
                you're a prospecting developer, or simply interested in WAX,
                these Guilds offers opportunities to be part of this journey.
                Witness how collaboration builds a stronger, more inclusive
                decentralized ecosystem.
              </p>
            </div>
          </div>

          <div class="mt-10 flex">
            <ButtonText
              class="mx-auto"
              href="#"
              text="Learn more about WAX Guilds"
            />
          </div>
        </div>
        <div class="lg:pr-4">
          <div class="relative">
            <div
              v-if="loading"
              class="mx-auto flex h-60 justify-center items-center my-12"
            >
              <LoadingSpinner :content="'Loading Guilds'" />
            </div>
            <Transition>
              <div v-if="guilds.length && !loading">
                <div
                  class="mt-4 text-center mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4"
                >
                  <div v-for="(guild, index) in guilds" :key="index">
                    <GuildCardSmall
                      :title="guild.producer"
                      :score="guild.score"
                      :pos="index"
                    />
                  </div>
                </div>
                <div
                  class="text-center absolute bg-gradient-to-t from-gray-50 h-60 w-full bottom-0 left-0 z-30"
                >
                  <ButtonPrimary
                    href="#"
                    text="View latest Review"
                    cssClass="absolute left-[50%] translate-x-[-50%] translate-y-5 bottom-0"
                  />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
