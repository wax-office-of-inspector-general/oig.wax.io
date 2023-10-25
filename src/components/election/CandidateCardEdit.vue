<script setup>
import { ref, toRef } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

const props = defineProps({
  candidate: Object
});

const formData = toRef(props, 'candidate');

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function submit(evt) {
  console.log(evt);
}
</script>
<template>
  <div>
    <button
      @click="openModal"
      class="relative items-center justify-center border border-transparent py-2 px-3 text-xs font-serif text-white bg-primary hover:bg-primary/90 hover:text-white"
    >
      Edit Candidate Details
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
                  Edit Candidate Details
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
                          />
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
                            v-model="formData.owner"
                            disabled
                            class="form-input"
                          />
                        </dd>
                      </div>
                      <div
                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt class="text-sm font-medium leading-6 text-primary">
                          Picture
                        </dt>
                        <dd
                          class="mt-1 text-sm leading-6 text-font sm:col-span-2 sm:mt-0"
                        >
                          <p
                            v-if="!props.candidate.picture"
                            class="relative h-32 w-32 rounded-full bg-font-100"
                          >
                            <span
                              class="absolute inset-x-0 top-[50%] translate-y-[-50%] text-center"
                            >
                              Invalid URL
                            </span>
                          </p>
                          <img
                            v-else
                            class="h-32 w-32 flex-shrink-0 rounded-full"
                            :src="props.candidate.picture"
                            alt=""
                          />
                          <input
                            type="text"
                            v-model.lazy="formData.picture"
                            class="form-input mt-6"
                          />
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
                          />
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
                          <input
                            type="text"
                            v-model="formData.twitter"
                            class="form-input"
                          />
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
                          >
                          </textarea>
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
                            Update Details
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
  </div>
</template>