<script setup>
import { ref } from 'vue';
import CandidateCardEdit from './CandidateCardEdit.vue';

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

import {
  DocumentMagnifyingGlassIcon,
  StarIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
  candidate: Object
});

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <div class="">
    <div class="flex flex-1 flex-col p-8">
      <img
        class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
        :src="props.candidate.picture"
        alt=""
      />
      <h3 class="mt-6 text-base font-medium text-gray-900">
        {{ props.candidate.name }}
      </h3>
      <dl class="mt-1 flex flex-grow flex-col justify-between">
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            class="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >123123 VOTE</span
          >
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x border-t border-t-gray-200">
        <div class="flex w-0 flex-1">
          <button
            @click="openModal"
            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-serif text-primary hover:bg-primary hover:text-white"
          >
            <DocumentMagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
            Details
          </button>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a
            href="#"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-serif text-primary hover:bg-primary hover:text-white"
          >
            <StarIcon class="h-5 w-5" aria-hidden="true" />
            Vote
          </a>
        </div>
      </div>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium flex justify-between leading-6 text-gray-900"
                >
                  <span>Candidate Details</span>
                  <CandidateCardEdit :candidate="props.candidate" />
                </DialogTitle>

                <div class="mt-6 border-t border-gray-100">
                  <dl class="divide-y divide-gray-100">
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt
                        class="text-sm font-medium leading-6 text-primary"
                      ></dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        <img
                          class="h-32 w-32 flex-shrink-0 rounded-full"
                          :src="props.candidate.picture"
                          alt=""
                        />
                      </dd>
                    </div>
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt class="text-sm font-medium leading-6 text-primary">
                        Name
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        {{ props.candidate.name }}
                      </dd>
                    </div>
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt class="text-sm font-medium leading-6 text-primary">
                        Wallet
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        <a
                          v-if="props.candidate.telegram"
                          href="`https://waxblock.io/account/{props.candidate.owner}`"
                          >{{ props.candidate.owner }}</a
                        >
                      </dd>
                    </div>
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt class="text-sm font-medium leading-6 text-primary">
                        Telegram
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        <a
                          v-if="props.candidate.telegram"
                          href="`https://t.me/{props.candidate.telegram}`"
                          >{{ props.candidate.telegram }}</a
                        >
                        <span v-else>–</span>
                      </dd>
                    </div>
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt class="text-sm font-medium leading-6 text-primary">
                        Twitter
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        <a
                          v-if="props.candidate.twitter"
                          href="`https://twitter.com/{props.candidate.twitter}`"
                        >
                          {{ props.candidate.twitter }}
                        </a>
                        <span v-else>–</span>
                      </dd>
                    </div>
                    <div
                      class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <dt class="text-sm font-medium leading-6 text-primary">
                        Description
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                      >
                        <p class="whitespace-pre-wrap">
                          {{ props.candidate.descriptor }}
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none"
                    @click="closeModal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none"
                    @click="closeModal"
                  >
                    Vote for this Candidate!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
