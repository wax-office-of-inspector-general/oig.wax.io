<script setup>
import { useSessionKit, useSession } from '../composables/useSession';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import {
  ChevronDownIcon,
  WalletIcon,
  ArrowLongRightIcon
} from '@heroicons/vue/24/outline';
import ButtonAction from './button/ButtonAction.vue';

const { login, logout } = useSessionKit();
const session = useSession();
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      :class="[
        session ? 'text-white' : 'text-white',
        'group inline-flex items-center rounded-md text-sm font-medium hover:text-gray-900 focus:outline-none'
      ]"
    >
      <div
        class="bg-primary hover:bg-primary rounded-md text-sm font-serif font-medium text-white hover:text-white"
      >
        <div v-if="session" class="flex flex-row items-center px-8 py-2.5">
          <WalletIcon
            class="mr-2 h-5 w-5 group-hover:text-white text-white"
            aria-hidden="true"
          />

          <span>{{ session.actor }}</span>
        </div>
        <div
          v-else
          @click="login"
          class="flex flex-row items-center px-8 py-2.5"
        >
          <span>Access</span>

          <ArrowLongRightIcon
            class="ml-2 h-5 w-5 group-hover:text-white text-white"
            aria-hidden="true"
          />
        </div>
      </div>
    </PopoverButton>

    <PopoverPanel
      v-if="session"
      class="absolute z-10 w-full flex items-stretch bg-primary"
    >
      <PopoverButton class="w-full">
        <ButtonAction
          text="Logout"
          :onClick="logout"
          cssClass="text-xs w-full"
        />
      </PopoverButton>
    </PopoverPanel>
  </Popover>
</template>

<style scoped></style>
