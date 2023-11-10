<script setup>
import { useStore } from 'vuex';
import { useSession } from '../../composables/useSession';
import CandidateCardEdit from './CandidateCardEdit.vue';
import ConfirmationModal from '../modal/ConfirmationModal.vue';
import { computed, onMounted, ref } from 'vue';
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import AccountSearchInput from '../accounts/AccountSearchInput.vue';

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

import { PlusCircleIcon } from '@heroicons/vue/24/outline';

const accountRegEx = /^[a-z1-5.]{1,11}[a-z1-5]$|(^[a-z1-5.]{12}[a-j1-5]$)/;

const store = useStore();

const session = useSession();

const nominees = computed(() => store.state.ballot.nominees);
const candidates = computed(() => store.state.ballot.candidates);

const isActorNotACandidate = computed(() => candidates.value.filter((candidate) => session?.value?.actor?.toString() == candidate?.owner).length == 0);

const isNominationOpen = computed(
  () => store.getters['ballot/isNominationOpen']
);

const isOpen = ref(false);
const isConfirmationModalOpen = ref(false);

const nominee = ref('');
const isAccountValid = computed(() => {
  return accountRegEx.test(nominee.value) || nominee.value.length < 2;
});

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
  nominee.value = '';
}

function openConfirmationModal() {
  isConfirmationModalOpen.value = true;
}

function cancelNomination() {
  isConfirmationModalOpen.value = false;
}

function confirmNomination() {
  nominate();
  // TODO: Only close confirmation modal on nominate action success
  isConfirmationModalOpen.value = false;
  // TODO: Notify on Success and error
  // notify({
  //   title: "Sucess",
  //   text: `${nominee.value} successfully nominated!`,
  //   type: "success"
  // });
  // notify({
  //   title: "Error",
  //   text: `${nominee.value} was not nominated.`,
  //   type: "error"
  // });
}

const nominate = () =>
  store.dispatch('ballot/nominate', { nominee: nominee.value });

onMounted(() => {
  if (!nominees.value.length) store.dispatch('ballot/fetchNominees');
});
</script>
<template>
  <div class="border border-gray-200 rounded-md">
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <div
        class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
      >
        <div class="ml-4 mt-6">
          <h3 class="text-xl font-semibold leading-6">Nominees</h3>
          <p class="mt-3 text-sm text-gray-500">
            Nominees become candidates if they acccept their nominations
          </p>
        </div>
      </div>
    </div>
    <div class="p-6 bg-white">
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="nominee in nominees"
          :key="nominee.nominee"
          class="col-span-1 divide-y divide-primary-50 rounded-lg bg-secondary-50 drop-shadow-md"
        >
          <div class="flex w-full items-center justify-between space-x-6 p-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-font">
                  {{ nominee.nominee }}
                </h3>
                <CandidateCardEdit
                  v-if="session?.actor?.toString() == nominee?.nominee && nominee.accepted && isActorNotACandidate"
                  :candidate="nominee"
                  :acceptance="true"
                />
                <span
                  v-else-if="nominee.accepted"
                  class="inline-flex flex-shrink-0 items-center rounded-full border border-gray-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-70 outline-none"
                  >accepted</span
                >
                <CandidateCardEdit
                  v-else-if="session?.actor?.toString() == nominee?.nominee"
                  :candidate="nominee"
                  :acceptance="true"
                />
                <span
                  v-else
                  class="inline-flex flex-shrink-0 items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-font outline-none"
                  >not accepted</span
                >
              </div>
            </div>
          </div>
        </li>

        <li
          v-if="isNominationOpen"
          class="col-span-1 divide-y divide-primary-50 rounded-lg bg-white hover:bg-primary group border border-dashed border-gray-300"
          @click="openModal"
        >
          <div
            class="hover:cursor-pointer flex w-full h-full items-center justify-between space-x-6 px-6 py-5"
          >
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <PlusCircleIcon
                  class="h-8 w-8 text-primary group-hover:text-white"
                  aria-hidden="true"
                />
                <h3
                  class="truncate text-sm font-medium group-hover:text-white text-primary"
                >
                  Nominate Candidate
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
                class="w-full max-w-2xl transform overflow-visible rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-primary"
                >
                  Nomination
                </DialogTitle>

                <div class="py-10">
                  <h3 class="text-base font-semibold leading-6 text-font">
                    Nominate your best Candidate!
                  </h3>
                  <div class="mt-2 text-sm max-w-lg text-gray-500">
                    <p>
                      We charge 100.0000 WAX for every nomination to prevent
                      spam. The funds won't be returned after the election.
                    </p>
                  </div>
                  <form ref="form" class="mt-6 sm:flex sm:items-center">
                    <div class="w-full sm:max-w-xs">
                      <label for="email" class="sr-only">Nominee Wallet</label>
                      <AccountSearchInput v-model="nominee" />
                      <div
                        v-if="!isAccountValid"
                        class="text-red-700 mt-2 flex gap-1 items-center"
                      >
                        <ExclamationCircleIcon
                          class="h-4 w-4"
                          aria-hidden="true"
                        />
                        Invalid account name
                      </div>
                    </div>
                  </form>
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
                    class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none disabled:bg-gray-500"
                    @click="openConfirmationModal"
                    :disabled="!isAccountValid || nominee.length < 2"
                  >
                    Nominate
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <ConfirmationModal
      :show="isConfirmationModalOpen"
      @confirm="confirmNomination"
      @cancel="cancelNomination"
      :title="`Are you sure you want to Nominate ${nominee}?`"
      description="This action is final and the WAX cost will be subtracted from your account after this confirmation."
    />
  </div>
</template>
