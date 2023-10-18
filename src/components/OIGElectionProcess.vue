<script setup>
import ButtonText from './button/ButtonText.vue';
</script>
<template>
  <div class="py-16 sm:py-20">
    <div class="mx-auto container px-6 lg:px-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            IG Election Process
          </h2>
          <div
            class="mt-8 grid max-w-xl grid-cols-1 gap-8 gap-y-12 text-base leading-7 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <p class="mb-4">
                In the WAX Community, the selection of the Office of the Inspector General (OIG) is conducted through a transparent and structured process. This process unfolds in the following steps:
              </p>
              <ButtonText href="/election" text="View current Election" />
            </div>
            <div>
              <ul class="list-disc list-outside ml-4">
                <li>
                  Elections are held every six months, with each Inspector General serving an 18-month term.
                </li>
                <li>
                  As soon as a new IG is elected, the previous IG’s tenure ends and they are rotated out.
                </li>
                <li>
                  The rotation of OIG seats takes place on the first day of February and August every year.
                </li>
                <li>
                  The OIG is compensated in WAX Tokens and their salary is paid out of the WAX Worker Proposal fund.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
