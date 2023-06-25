<script setup>
import ButtonPrimary from './button/ButtonPrimary.vue';
import ButtonSecondary from './button/ButtonSecondary.vue';

const title = 'Our mission';
const subtitle =
  'We are an independent body within the WAX Network, whose purpose is to ensure transparency, integrity, and ongoing development of the ecosystem. The OIG operates independently, providing a neutral and unbiased perspective in its evaluations and recommendations.';

const duties = [
  {
    title: 'Guild Evaluations',
    description:
      'Thorough evaluations of Guilds to ensure adherence to standards and positive contributions to the ecosystem.',
    href: '#'
  },
  {
    title: 'WAX Labs Reviews',
    description:
      "Assessment of WAX Labs projects for viability, impact, and alignment with the network's goals.",
    href: '#'
  },
  {
    title: 'Secure/Enhance Network',
    description:
      'Monitoring, addressing vulnerabilities, and implementing improvements for a secure and reliable network.',
    href: '#'
  }
];
</script>

<template>
  <div class="bg-white py-12 lg:py-20 my-12 lg:my-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-xl font-serif tracking-tight text-font">
          {{ title }}
        </h2>
        <div class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-xl lg:flex-auto">
            <p class="text-base leading-normal">
              {{ subtitle }}
            </p>
            <p class="mt-10 max-w-xl text-base leading-7">
              The primary role of the OIG is to evaluate the Block Producers,
              known as Guilds within the WAX Network. These Guilds are the top
              21 validators of the DPoS chain, each an independent and
              autonomous entity, controlling only one producer.
            </p>

            <div
              class="flex flex-col sm:flex-row justify-start items-start mt-8 gap-4"
            >
              <ButtonPrimary
                href="#"
                text="About the OIG"
                cssClass="text-font"
              />

              <ButtonSecondary
                href="#"
                text="About WAX Guilds"
                cssClass="text-font"
              />
            </div>
          </div>
          <div class="lg:flex lg:flex-auto lg:justify-center ">
            <dl class="w-full space-y-6 grid grid-cols-2 gap-x-6">
              <div
                v-for="duty in duties"
                :key="duty.title"
                class="flex flex-col-reverse gap-y-4"
              >
                <dt class="text-sm leading-7">
                  {{ duty.description }}
                </dt>
                <dd class="text-base font-serif font-bold">
                  <a href="{{ duty.href }}" class="text-font">
                    <span class="text-md" aria-hidden="true">&Sc;</span>
                    {{ duty.title }}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
