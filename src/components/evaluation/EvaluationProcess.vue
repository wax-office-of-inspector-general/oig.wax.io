<script setup>
import {
  ServerStackIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/20/solid';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
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
        </div>
      </div>
      <div>
        <p class="mt-16 pt-1">Evaluations mainly consist of two parts:</p>
        <ul role="list" class="mt-6 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <PresentationChartLineIcon
              class="mt-1 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              ><strong class="text-primary">Ecosystem Contributions.</strong>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.</span
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

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 py-12 md:py-20"
    >
      <div>
        <img
          class="w-full rounded-md drop-shadow-sm md:mt-20 border border-primary-100"
          src="@/assets/images/guild-reqs.png"
        />
        <p class="text-xs italic text-center mt-2">
          Example: Guild Requirements of a guild that is already producing
        </p>
      </div>
      <div>
        <h2 class="text-xl font-serif tracking-tight text-primary">
          Infrastructure Services
        </h2>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          The technical infrastructure provided by Guilds is evaluated on a
          regular basis. Until further notice, this happens on a bi-weekly
          turnus every odd week number on the same day, with the OIG announcing
          this turnus's starting date. Should the expected day of evaluation
          fall on an international holiday, it may be delayed by up to two days,
          with the deviation being communicated by the OIG in advance.
        </p>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          Data for technical evaluations are based on performance on the WAX
          mainnet. If a guild is not in active rotation and no mainnet data is
          present, WAX testnet performance will be applied instead. As such,
          Guilds are always advised to maintain both mainnet and testnet
          infrastructure in line with our technical requirements, ensuring both
          networks are properly represented in their chains.json and tracked by
          our known validation services.
        </p>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          This ensures that we maintain and enhance:
        </p>
        <ul role="list" class="mt-6 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              >a performant and reliable public infrastructure, free of
              charge</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span>a framework to advance the network strategically</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span>good UX and DX for users of all types</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span>the fastest<sup>™</sup> gaming blockchain to date</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 py-12 md:py-20"
    >
      <div>
        <h2 class="text-xl font-serif tracking-tight text-primary">
          Ecosystem Contributions
        </h2>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          The evaluation of ecosystem contributions occurs in cycles of
          approximately six weeks. The specific dates for each cycle are
          announced by the OIG. Evaluations conclude on either the 15th or the
          last day of every month, alternating between the two. The submission
          deadline for each cycle is approximately 15 days earlier, at the end
          of the preceding 15th or last day.
        </p>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          To receive an evaluation of ecosystem contributions, Guilds must
          submit updates on their efforts through Github, including all relevant
          data and information, before a submission deadline. Confidential
          information can be submitted via email but must be noted in the public
          update. Publishing an update with non-confidential information is
          mandatory if you want the OIG to evaluate your confidential addenda.
        </p>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          Submissions after a cut-off date but during an ongoing evaluation will
          be attributed to the following evaluation.
        </p>
        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          It is imperative to note that the OIG relies upon the accuracy of
          reported information to conduct its work. Any points credited under
          false pretense due to erroneous information being submitted or
          significant changes not being communicated may result in a penalty.
        </p>

        <p class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          What we like to see:
        </p>

        <ul role="list" class="mt-6 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              >positive contributions of all sorts to the WAX ecosystem</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              >enabling developers through tools and educational
              initiatives</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              >Nurture the WAX ecosystem to gaming enthusiasts, blockchain
              developers and digital collectors</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              >Digital Products that strategically grow the WAX ecosystem and
              have an impact on the user
            </span>
          </li>
        </ul>
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
  </div>
</template>
