<script setup>
import {
  ServerStackIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/20/solid';
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12">
      <div>
        <h2 class="text-xl font-serif tracking-tight text-primary">
          Evaluation Process
        </h2>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          Guilds are assessed at regular intervals based on the criteria
          declared within these guidelines. The process is split into the
          evaluation of ecosystem contributions and infrastructure services.
        </p>
        <div class="mt-6 text-base leading-7 text-gray-700 lg:max-w-lg">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" class="mt-8 space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <PresentationChartLineIcon
                class="mt-1 h-5 w-5 flex-none text-primary"
                aria-hidden="true"
              />
              <span
                ><strong class="text-primary">Ecosystem Contributions.</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.</span
              >
            </li>
            <li class="flex gap-x-3">
              <ServerStackIcon
                class="mt-1 h-5 w-5 flex-none text-primary"
                aria-hidden="true"
              />
              <span
                ><strong class="font text.primary"
                  >Infrastructure Services.</strong
                >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          class="w-full rounded-md drop-shadow-sm md:mt-20 border border-primary-100"
          src="@/assets/images/guild-table.png"
        />
        <p class="text-xs italic text-center mt-2">
          Example: Score Table for a T21 Guild
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>
