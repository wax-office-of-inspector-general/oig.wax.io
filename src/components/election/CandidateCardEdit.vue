<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useSession } from '../../composables/useSession';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';
import ConfirmationModal from '../modal/ConfirmationModal.vue';

import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength, url } from '@vuelidate/validators';

const props = defineProps({
  candidate: Object,
  acceptance: Boolean
});

const store = useStore();

const session = useSession();

const formData = reactive({ ...props.candidate });

const handleRegexValidation = (value) => /^@[a-zA-Z0-9_]{0,15}/.test(value);
const oigPrefixRegexValidation = (value) => /^[a-z1-5.]{1,11}[a-z1-5]$|(^[a-z1-5.]{12}[a-j1-5]$)/.test(value);
const pubkeyRegexValidation = (value) => /^PUB_K1_[1-9A-HJ-NP-Za-km-z]{50}$|^EOS[1-9A-HJ-NP-Za-km-z]{50}$/.test(value);

const rules = {
  name: { required, minLength: minLength(3) },
  descriptor: { required, minLength: minLength(3) },
  picture: { required, url },
  telegram: { handleRegexValidation },
  twitter: { handleRegexValidation },
  oig_prefix: { required, maxLength: maxLength(8), oigPrefixRegexValidation },
  pubkey: { pubkeyRegexValidation }
};

const $v = useVuelidate(rules, formData);

const isOpen = ref(false);
const isConfirmationModalOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function openConfirmationModal() {
  isConfirmationModalOpen.value = true;
}

function cancelNominationAcceptance() {
  isConfirmationModalOpen.value = false;
}

function confirmNominationAcceptance() {
  if (props.acceptance) {
    proclaimAndNominf();
  } else {
    nominf();
  }
}

const nominf = () => store.dispatch('ballot/nominf', formData);

const proclaimAndNominf = () =>
  store.dispatch('ballot/proclaimAndNominf', formData);

async function submit() {
  const result = await $v.value.$validate();
  if (result) {
    openConfirmationModal();
  }
}
</script>
<template>
  <div>
    <button
      @click="openModal"
      class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none"
    >
      {{ acceptance ? 'Accept' : 'Edit' }}
    </button>

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
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{
                    acceptance ? 'Accept Candidacy' : 'Edit Candidate Details'
                  }}
                </DialogTitle>

                <div class="mt-6 border-t border-gray-100">
                  <form @submit.prevent="submit">
                    <dl class="divide-y divide-gray-100">
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt class="text-sm font-medium leading-6 text-primary">
                          Name
                        </dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                        >
                          <input
                            type="text"
                            v-model="formData.name"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.name.$errors.length
                            }"
                          />
                          <p
                            class="text-red-700"
                            v-for="error in $v.name.$errors"
                            :key="error.$uid"
                          >
                            {{ error.$message }}
                          </p>
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
                          <input
                            type="text"
                            :value="
                              props.acceptance
                                ? session?.actor?.toString()
                                : formData.owner
                            "
                            disabled
                            class="form-input"
                          />
                        </dd>
                      </div>
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt class="text-sm font-medium leading-6 text-primary">
                          Picture URL
                        </dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                        >
                          <p
                            v-if="!props.candidate.picture && !acceptance"
                            class="relative mb-6 h-32 w-32 rounded-full bg-font-100"
                          >
                            <span
                              class="absolute inset-x-0 top-[50%] translate-y-[-50%] text-center"
                            >
                              Invalid URL
                            </span>
                          </p>
                          <img
                            v-else-if="!acceptance"
                            class="h-32 w-32 flex-shrink-0 rounded-full"
                            :src="props.candidate.picture"
                            alt=""
                          />
                          <input
                            type="text"
                            v-model.lazy="formData.picture"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.picture.$errors.length
                            }"
                          />
                          <p
                            class="text-red-700"
                            v-for="error in $v.picture.$errors"
                            :key="error.$uid"
                          >
                            {{ error.$message }}
                          </p>
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
                          <input
                            type="text"
                            v-model="formData.telegram"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.telegram.$errors.length
                            }"
                          />
                          <p class="text-red-700" v-if="$v.telegram.$error">
                            Not a valid Telegram account
                          </p>
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
                          <input
                            type="text"
                            v-model="formData.twitter"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.twitter.$errors.length
                            }"
                          />
                          <p class="text-red-700" v-if="$v.twitter.$error">
                            Not a valid Twitter/X account
                          </p>
                        </dd>
                      </div>
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt class="text-sm font-medium leading-6 text-primary">
                          OIG prefix (Only visible to you)
                        </dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                        >
                          <input
                            type="text"
                            v-model="formData.oig_prefix"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.oig_prefix.$errors.length
                            }"
                          />
                          <p class="text-red-700" v-if="$v.oig_prefix.$error">
                            Not a valid prefix. It is required, has to have a maximum of 8 characters and must abide to the EOSIO naming standard
                          </p>
                        </dd>
                      </div>
                      <!-- TODO: Investigate Public Key regex validation -->
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt class="text-sm font-medium leading-6 text-primary">
                          Public Key (Only visible to you)
                        </dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                        >
                          <input
                            type="text"
                            v-model="formData.pubkey"
                            class="form-input"
                            :class="{
                              'border-red-700': $v.pubkey.$errors.length
                            }"
                          />
                          <p class="text-red-700" v-if="$v.pubkey.$error">
                            Not a valid Public Key
                          </p>
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
                          <textarea
                            type="text"
                            v-model="formData.descriptor"
                            rows="10"
                            class="form-textarea w-[450px] max-w-full"
                            :class="{
                              'border-red-700': $v.twitter.$errors.length
                            }"
                          >
                          </textarea>
                          <p
                            class="text-red-700"
                            v-for="error in $v.descriptor.$errors"
                            :key="error.$uid"
                          >
                            {{ error.$message }}
                          </p>
                        </dd>
                      </div>
                    </dl>

                    <dl>
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt
                          class="text-sm font-medium leading-6 text-primary"
                        ></dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font text-right sm:col-span-2 sm:mt-0"
                        >
                          <button
                            type="button"
                            class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none"
                            @click="closeModal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none"
                          >
                            {{ acceptance ? 'Accept' : 'Update Details' }}
                          </button>
                        </dd>
                      </div>
                    </dl>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <ConfirmationModal
      :show="isConfirmationModalOpen"
      @confirm="confirmNominationAcceptance"
      @cancel="cancelNominationAcceptance"
      :title="
        acceptance
          ? 'Are you sure you want to accept your nomination?'
          : 'Are you sure you want to update your candidate details?'
      "
      :description="
        acceptance
          ? 'This action will make you eligible as a candidate for the OIG election as well as fill your candidate details.'
          : 'This will replace your candidate details with the new information.'
      "
    />
  </div>
</template>
