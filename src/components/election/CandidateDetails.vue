<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useSession } from '../../composables/useSession';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';
import CandidateCardEdit from './CandidateCardEdit.vue';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();

const route = useRoute();

const candidate = computed(
  () =>
    store.state.ballot.candidates.filter(
      (c) => route.params.id === c.owner
    )[0] ?? null
);

const session = useSession();

const router = useRouter();
const closeModal = () => router.push('/election');
</script>

<template>
  <TransitionRoot appear :show="true" as="template">
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
              </DialogTitle>

              <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                  <div
                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  >
                    <dt class="text-sm font-medium leading-6 text-primary"></dt>
                    <dd
                      class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                    >
                      <img
                        class="h-32 w-32 flex-shrink-0 rounded-full"
                        :src="candidate?.picture"
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
                      {{ candidate?.name }}
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
                        v-if="candidate?.owner"
                        href="`https://waxblock.io/account/{candidate?.owner}`"
                        >{{ candidate?.owner }}</a
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
                        v-if="candidate?.telegram"
                        href="`https://t.me/{candidate?.telegram}`"
                        >{{ candidate?.telegram }}</a
                      >
                      <span v-else>–</span>
                    </dd>
                  </div>
                  <div
                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  >
                    <dt class="text-sm font-medium leading-6 text-primary">
                      Twitter/X
                    </dt>
                    <dd
                      class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                    >
                      <a
                        v-if="candidate?.twitter"
                        href="`https://twitter.com/{candidate?.twitter}`"
                      >
                        {{ candidate?.twitter }}
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
                        {{ candidate?.descriptor }}
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>

              <div class="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none"
                  @click="closeModal"
                >
                  Close
                </button>
                <CandidateCardEdit
                  v-if="session?.actor?.toString() == candidate?.owner"
                  :candidate="candidate"
                  :acceptance="false"
                />
                <!-- <button
                    v-else
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none"
                    @click="closeModal"
                    disabled
                  >
                    Vote for this Candidate!
                  </button> -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
