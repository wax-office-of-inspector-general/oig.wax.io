<script setup>
import ButtonText from './button/ButtonText.vue';

const title = 'WAX - Most proven blockchain ecosystem';
const subtitle =
  'The Office of Inspector General (OIG) is an independent body within the WAX Network, whose purpose is to ensure transparency, integrity, and ongoing development of the ecosystem. The OIG operates independently, providing a neutral and unbiased perspective in its evaluations and recommendations.';
</script>

<template>
  <div class="my-12 lg:my-20">
    <div
      class="mx-auto flex flex-col max-w-7xl items-start justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8"
    >
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-xl font-serif tracking-tight text-font sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-6 text-base leading-7 text-gray-600">{{ subtitle }}</p>
      </div>

      <div
        class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
      >
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg bg-primary-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-gray-900">
            33 Guilds
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p class="text-md font-semibold tracking-tight text-font">
              Become a Guild
            </p>
            <p class="mt-3 text-base leading-snug text-gray-600">
              Learn what it takes to become a validator on WAX
            </p>
            <ButtonText
              href="#"
              text="Apply"
              cssClass="text-gray-600 mt-6"
            ></ButtonText>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg bg-tertiary p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-white">
            130+ Proposals
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p class="text-md font-semibold tracking-tight text-white">
              Start building with funding
            </p>
            <p class="mt-3 text-base leading-snug text-white">
              Eu duis porta aliquam ornare. Elementum eget magna egestas.
            </p>
            <ButtonText
              href="#"
              text="Start building"
              cssClass="text-white hover:text-white/80 mt-6"
            ></ButtonText>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-lg bg-secondary-50 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
        >
          <p class="flex-none text-xl font-serif tracking-tight text-tertiary">
            3 IG's
          </p>
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p
              class="text-md semibold font-semibold tracking-tight text-tertiary"
            >
              Help enhancing the network
            </p>
            <p class="mt-3 text-base leading-snug text-font">
              Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
              duis porta aliquam ornare.
            </p>
            <ButtonText
              href="#"
              text="Participate"
              cssClass="text-secondary-800 mt-6"
            ></ButtonText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
