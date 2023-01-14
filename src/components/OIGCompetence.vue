<script setup>
import {
  EyeIcon,
  AdjustmentsHorizontalIcon,
  ScaleIcon,
  TrophyIcon
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Oversight",
    description:
      "Evaluate WAX Guilds using an evolving heuristic. The OIG determines which service providers are best suited to operate the network based on competence, value add, and other metrics.",
    icon: EyeIcon
  },
  {
    name: "Responsibilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon
  },
  {
    name: "Competitiveness",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: TrophyIcon
  },
  {
    name: "Fairness",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AdjustmentsHorizontalIcon
  }
];
</script>
<template>
  <div class="bg-white py-16 sm:py-20 lg:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-md font-semibold leading-8 text-tertiary">
          Our Mission
        </h2>
        <p
          class="mt-2 text-xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl"
        >
          Redefining Blockchain Governance
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-base text-gray-600">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"
            >
              <component
                :is="feature.icon"
                class="h-8 w-8 text-font"
                aria-hidden="true"
              />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">
                {{ feature.name }}
              </p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
