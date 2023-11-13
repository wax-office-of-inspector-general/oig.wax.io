<script setup>
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
import ButtonSecondary from '@/components/button/ButtonSecondary.vue';

const title = 'OIG on WAX';
</script>

<template>
  <div
    class="container mx-auto rounded-lg drop-shadow-sm bg-white py-12 lg:py-20"
  >
    <div class="">
      <div class="">
        <h2 class="text-xl text-center lg:text-left font-serif tracking-tight">
          {{ title }}
        </h2>
        <div class="mt-6 flex gap-x-20 gap-y-10 lg:flex-row flex-col-reverse">
          <div class="w-half lg:w-full lg:max-w-full lg:flex-auto">
            <p class="mt-0 text-base leading-7">
              The OIG is an autonomous entity within the WAX Network,
              transparency, integrity, and fostering continuous growth within
              within the ecosystem. Operating independently, the OIG offers an
              impartial and unbiased viewpoint in its assessments and
              suggestions.
            </p>
            <p class="mt-6 text-base leading-7">
              A key role of the OIG is to review block producers, known as
              Guilds within the WAX Network. Heuristic guidelines and reviews
              ensure valuable ecosystem contributions while also enhancing
              performance, reliability and security of the network.
            </p>

            <div
              class="flex flex-col sm:flex-row justify-start items-start mt-8 gap-4"
            >
              <ButtonPrimary
                href="/"
                text="Tell me more"
                cssClass="text-primary"
              />

              <ButtonSecondary
                href="/"
                text="View WAX Guilds"
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
