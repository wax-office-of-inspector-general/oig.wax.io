<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import ButtonText from '@/components/button/ButtonText.vue';

const title = 'Building a DAO for a robust DPOS ecosystem';
const subtitle =
  'We craft a technological framework that enables reliable and performant infrastructure for blockchain game developers and digital artists alike. Our foundation is an organic and thriving community of gaming and art enthusiasts.';

const store = useStore();

const guilds = computed(() => store.state.guilds.guilds);
const proposals = computed(() => store.state.proposals.proposals);

onMounted(() => {
  if (!guilds.value.length) store.dispatch('guilds/fetchGuilds');
  if (!proposals.value.length) store.dispatch('proposals/fetchProposals');
});
</script>

<template>
  <div class="container mx-auto my-12 lg:my-20">
    <div
      class="mx-auto flex flex-col items-start justify-betweenpy-5 sm:py-4 md:justify-start"
    >
      <div class="mx-auto">
        <h2 class="text-xl font-serif text-center tracking-tight sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-6 text-base max-w-2xl text-center leading-7">
          {{ subtitle }}
        </p>
      </div>

      <div
        class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
      >
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg drop-shadow-sm bg-primary-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-primary">
            {{ guilds.length }} Guilds
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p class="text-md font-semibold tracking-tight text-primary">
              Become a Guild
            </p>
            <p class="mt-3 text-base leading-snug text-primary">
              Learn what it takes to become a validator on WAX
            </p>
            <ButtonText
              href="https://www.notion.so/wax-oig/Initial-Evaluation-Process-7fa321f057004a6cbd884144285e7f49"
              text="Apply"
              cssClass="text-primary mt-6"
            ></ButtonText>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg drop-shadow-sm bg-primary p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-white">
            {{ proposals.length }} Proposals
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p class="text-md font-semibold tracking-tight text-white">
              Buidl with funding
            </p>
            <p class="mt-3 text-base leading-snug text-white">
              Contribute your expertise to enhance the WAX network
            </p>
            <ButtonText
              href="https://labs.wax.io/"
              text="View Proposals"
              cssClass="text-white hover:text-white/80 mt-6"
            ></ButtonText>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg drop-shadow-sm bg-secondary-50 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-tertiary">
            3 IG's
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p
              class="text-md semibold font-semibold tracking-tight text-tertiary"
            >
              Checks and Balances
            </p>
            <p class="mt-3 text-base leading-snug text-font">
              Participate in our open governance process and help enhance the
              networks standards
            </p>
            <ButtonText
              href="/the-wax-oig"
              text="Tell me more"
              cssClass="text-secondary-800 mt-6"
            ></ButtonText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
