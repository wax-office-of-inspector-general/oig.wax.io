<script setup>
import { useSessionKit, useSession } from '../composables/useSession';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { WalletIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline';

const { login, logout } = useSessionKit();
const session = useSession();
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      :class="[
        session ? 'text-white' : 'text-white',
        'group inline-flex items-center rounded-md text-sm hover:text-gray-900 focus:outline-none'
      ]"
    >
      <div
        class="bg-primary hover:bg-primary rounded-md text-sm text-white hover:text-white"
      >
        <div
          v-if="session"
          class="min-w-[180px] justify-center flex flex-row items-center px-8 py-2.5"
        >
          <WalletIcon
            class="mr-2 h-5 w-5 group-hover:text-white text-white"
            aria-hidden="true"
          />
          <span class="text-sm leading-5">{{ session.actor }}</span>
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
      class="absolute z-10 w-full drop-shadow-md bg-white rounded-b-md -translate-y-1"
    >
      <div class="flex flex-col items-stretch">
        <div class="p-3  flex flex-col">
          <p class="text-xs text-font/50">wallet connected</p>
          <p class="text-sm">
            <strong>{{ session.actor }}</strong>@{{ session.permission }}</p>
        </div>
        <div class="mt-2 flex flex-col divide-y">
          <a
            :href="`https://waxblock.io/account/${session.actor}`"
            target="_blank"
            class="relative inline-block whitespace-nowrap px-3 py-2 text-xs text-primary focus-visible:none hover:bg-primary hover:text-white"
          >
            View Account
            <span class="ml-1" aria-hidden="true"> &rarr;</span>
          </a>
          <button
            :onClick="logout"
            class="relative text-left inline-block whitespace-nowrap px-3 py-2 text-xs text-primary focus-visible:none hover:bg-primary hover:text-white"
          >
            Logout
            <span class="ml-1" aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<style scoped></style>
