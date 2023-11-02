<script setup>
import ButtonPrimary from './button/ButtonPrimary.vue';
import ButtonSecondary from './button/ButtonSecondary.vue';

const title = 'OIG on WAX';
</script>

<template>
  <div class="container mx-auto rounded-lg drop-shadow-sm bg-white py-12 lg:py-20">
    <div class="">
      <div class="">
        <h2 class="text-xl text-center lg:text-left font-serif tracking-tight">
          {{ title }}
        </h2>
        <div class="mt-6 flex gap-x-20 gap-y-10 lg:flex-row flex-col-reverse">
          <div class="w-half lg:w-full lg:max-w-full lg:flex-auto">
            <p class="mt-0 text-base leading-7">
              We are an autonomous entity within the WAX Network, dedicated to
              upholding transparency, integrity, and fostering continuous growth
              within the ecosystem. Operating independently, the OIG offers an
              impartial and unbiased viewpoint in its assessments and
              suggestions.
            </p>
            <p class="mt-6 text-base leading-7">
              The primary role of the OIG is to evaluate the Block Producers,
              known as Guilds within the WAX Network. These Guilds are the top
              21 validators of the DPoS chain, each an independent and
              autonomous entity, controlling only one producer.
            </p>

            <div
              class="flex flex-col sm:flex-row justify-start items-start mt-8 gap-4"
            >
              <ButtonPrimary
                href="/"
                text="About the OIG"
                cssClass="text-primary"
              />

              <ButtonSecondary
                href="/"
                text="About WAX Guilds"
                cssClass="text-font"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <img
              class="mx-auto"
              src="@/assets/images/oig-logo.png"
              alt="WAX OIG Logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
