<script setup>
import ButtonText from '@/components/button/ButtonText.vue';
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';

const headline = 'The Election process';

const electionProcess = [
  'Elections are held every six months, with each Inspector General serving an 18-month term.',
  'As soon as a new IG is elected, the previous IG&#39;s tenure ends and they are rotated out.',
  'The rotation of OIG seats takes place on the first day of February and August every year.',
  'Nomination and Voting period is set to 7 full days each. Ideally the election concludes 3 full months before the seat is replaced.'
]
</script>
<template>
  <div class="py-16 sm:py-20">
    <div class="mx-auto container px-6 lg:px-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            {{ headline }}
          </h2>
          <div
            class="mt-8 grid max-w-xl grid-cols-1 gap-8 gap-y-12 text-base leading-7 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <p class="mb-4">
                In the WAX Community, the selection of the Office of the
                Inspector General (OIG) is conducted through a transparent and
                structured process. This process unfolds in the following steps:
              </p>
              <ButtonText href="/election" text="When is the next election?" />
            </div>
            <div>
              <ul role="list" class="space-y-8 text-gray-600">
                <li
                  v-for="(ep, index) in electionProcess"
                  :key="index"
                  class="flex gap-x-3"
                >
                  <CheckBadgeIcon
                    class="mt-1 h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span v-html="ep"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
