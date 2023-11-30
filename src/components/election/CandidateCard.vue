<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import ConfirmationModal from '../modal/ConfirmationModal.vue';
import { useSession } from '../../composables/useSession';
import { XCircleIcon } from '@heroicons/vue/20/solid';

import {
  DocumentMagnifyingGlassIcon,
  StarIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
  candidate: Object
});

const store = useStore();

const session = useSession();

const isVotingOpen = computed(() => store.getters['ballot/isVotingOpen']);

const router = useRouter();
const route = useRoute();

const isDeleteConfirmationModalOpen = ref(false);
const isVotingConfirmationModalOpen = ref(false);

function openModal() {
  router.push(`${route.path}/${props.candidate.owner}/`);
}

function openDeleteConfirmationModal() {
  isDeleteConfirmationModalOpen.value = true;
}

function cancelDeletion() {
  isDeleteConfirmationModalOpen.value = false;
}

function confirmDeletion() {
  deleteCandidacy();
}

const deleteCandidacy = () =>
  store.dispatch('ballot/proclaim', {
    decision: false,
    success: () => {
      isDeleteConfirmationModalOpen.value = false;
    }
  });

function openVotingConfirmationModal() {
  isVotingConfirmationModalOpen.value = true;
}

function cancelVoting() {
  isVotingConfirmationModalOpen.value = false;
}

function confirmVoting() {
  vote();
}

const vote = () =>
  store.dispatch('ballot/vote', {
    candidate: props.candidate,
    success: () => {
      isVotingConfirmationModalOpen.value = false;
    }
  });
</script>

<template>
  <div
    class="rounded-lg text-center shadow bg-gray-50"
    :class="{
      '!bg-secondary-50': isVotingOpen,
      '!bg-primary-50': isVotingClosed
    }"
  >
    <div class="flex flex-1 flex-col p-8">
      <img
        class="mx-auto h-32 w-32 object-cover flex-shrink-0 rounded-full"
        :src="props.candidate.picture"
        alt=""
      />
      <h3 class="mt-6 text-base font-medium text-gray-900">
        {{ props.candidate.name }}
      </h3>
      <p class="text-sm text-gray-500">
        {{ props.candidate.owner }}
      </p>
      <dl
        v-if="isVotingOpen"
        class="mt-1 flex flex-grow flex-col justify-between"
      >
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            class="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
          >
            {{ props?.candidate?.votes }}
          </span>
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
          <button
            v-if="session?.actor?.toString() == props?.candidate?.owner"
            @click="openDeleteConfirmationModal"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-serif text-primary hover:bg-primary hover:text-white"
          >
            <XCircleIcon class="h-5 w-5" aria-hidden="true" />
            Delete
          </button>
          <button
            v-else-if="isVotingOpen"
            @click="openVotingConfirmationModal"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-serif text-primary hover:bg-primary hover:text-white"
          >
            <StarIcon class="h-5 w-5" aria-hidden="true" />
            Vote
          </button>
        </div>
      </div>
    </div>

    <ConfirmationModal
      :show="isDeleteConfirmationModalOpen"
      @confirm="confirmDeletion"
      @cancel="cancelDeletion"
      title="Are you sure you want to delete your candidacy?"
      description="This action is final and cannot be reverted. The WAX amount used for the nomination will not be refunded."
    />
    <ConfirmationModal
      :show="isVotingConfirmationModalOpen"
      @confirm="confirmVoting"
      @cancel="cancelVoting"
      title="Are you sure you want to vote for this candidate?"
      description="This action will count your staked WAX amount at the end of the election towards this candidate vote total. This vote will overwrite any previous vote."
    />
  </div>
</template>
