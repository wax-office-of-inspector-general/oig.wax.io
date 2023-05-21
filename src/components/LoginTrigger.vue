<script setup>
import { useSessionKit, useSession } from '../composables/useSession';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon, WalletIcon } from '@heroicons/vue/24/outline';
import ButtonAction from './button/ButtonAction.vue';

const { login, logout } = useSessionKit();
const session = useSession();
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      :class="[
        session ? 'text-font' : 'text-tertiary-800',
        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 ring-transparent focus:border-transparent focus:ring-0 focus:primary focus:ring-offset-2'
      ]"
    >
      <div
        class="flex flex-row items-center text-base font-serif font-medium text-gray-500 hover:text-gray-900"
      >
        <WalletIcon
          class="mr-2 h-5 w-5 group-hover:text-gray-500 text-font"
          aria-hidden="true"
        />

        <div v-if="session" class="">
          <span>{{ session.actor }}</span>

          <ChevronDownIcon
            class="inline-block ml-2 h-4 w-4 group-hover:text-current text-font"
            aria-hidden="true"
          />
        </div>
        <div v-else @click="login">Login</div>
      </div>
    </PopoverButton>

    <PopoverPanel
      v-if="session"
      class="absolute z-10 w-full flex items-stretch bg-secondary-50"
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
