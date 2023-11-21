<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue';
import {
  ArchiveBoxIcon,
  Bars3Icon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon,
  BeakerIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  WalletIcon
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import HeadingArticles from './HeadingArticles.vue';
import LoginTrigger from './LoginTrigger.vue';

const solutions = [
  {
    name: 'The OIG',
    description: "What's the OIG and what does it?",
    to: { name: 'the-wax-oig' },
    icon: BuildingLibraryIcon,
    highlight: false
  },
  {
    name: 'WAX Guilds',
    description: 'Explore validators on WAX',
    to: { name: 'wax-guilds' },
    icon: CubeTransparentIcon,
    highlight: false
  },
  {
    name: 'Guild Evaluations',
    description: 'What makes a good validator on WAX?',
    to: { name: 'guild-reviews' },
    icon: ShieldCheckIcon,
    highlight: false
  },
  {
    name: 'OIG Election',
    description: 'Be part of Blockchain governance',
    to: { name: 'election' },
    icon: ArchiveBoxIcon,
    highlight: true
  }
];
const callsToAction = [
  {
    name: 'Join the Conversation',
    href: 'https://t.me/guilds_wax_io',
    icon: ChatBubbleLeftRightIcon
  },
  {
    name: 'Learn More about WAX',
    href: 'https://www.wax.io/',
    icon: InformationCircleIcon
  }
];
const experts = [
  {
    name: 'Labs',
    href: 'https://labs.wax.io/',
    icon: BeakerIcon
  },
  { name: 'Jobs', href: 'https://t.me/waxjobs', icon: BriefcaseIcon }
];
const resources = [
  {
    name: 'Community',
    href: 'https://www.wax.io/community',
    icon: UserGroupIcon
  },
  { name: 'Wallets', href: 'https://www.wax.io/get-a-wallet', icon: WalletIcon }
];
</script>

<template>
  <Popover class="container mx-auto relative z-9">
    <div class="pointer-events-none absolute inset-0 z-8" aria-hidden="true" />
    <div class="relative bg-transparent z-9 border-b border-b-primary/20">
      <div
        class="z-8 flex items-center justify-between py-10 sm:py-12 md:justify-start md:space-x-10"
      >
        <div>
          <router-link :to="{ name: 'home' }" class="flex items-center">
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/oig-logo.png"
              alt="WAX OIG Logo"
            />
            <h1 class="text-md font-serif font-bold ml-6">WAX OIG</h1>
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden z-9">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div
          class="hidden md:flex md:flex-1 md:items-center md:justify-end z-9"
        >
          <PopoverGroup as="nav" class="flex items-center space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-primary underline' : 'text-primary',
                  'group inline-flex hover:underline items-center rounded-md text-sm font-medium hover:text-gray-900 focus:outline-none'
                ]"
              >
                <span class="font-serif">Governance</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-primary' : 'text-primary-500',
                    'ml-1 h-4 w-4 group-hover:text-primary'
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  v-slot="{ close }"
                  class="bg-white absolute inset-x-0 top-full z-9 hidden drop-shadow-md rounded-sm transform md:block"
                >
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <router-link
                      v-for="item in solutions"
                      :key="item.name"
                      :to="item.to"
                      :onClick="close"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-secondary-50"
                    >
                      <button>
                        <div class="flex md:h-full lg:flex-col">
                          <div class="flex-shrink-0">
                            <span
                              class="inline-flex h-10 w-10 items-center justify-center rounded-md text-white sm:h-12 sm:w-12"
                            >
                              <component
                                :is="item.icon"
                                class="h-7 w-7 text-font"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div
                            class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                          >
                            <div class="relative">
                              <span
                                v-if="item.highlight"
                                class="absolute top-[-5px] left-[-10px] h-2 w-2 bg-tertiary rounded-full animate-ping duration-1000 delay-500"
                              ></span>
                              <p class="text-md font-serif font-bold text-font">
                                {{ item.name }}
                              </p>
                              <p class="mt-2 text-sm text-font">
                                {{ item.description }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </router-link>
                  </div>
                  <div class="bg-secondary-50">
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <a
                          :href="item.href"
                          class="-m-3 flex items-center rounded-md py-2 px-4 text-xs font-medium bg-secondary-50 hover:bg-secondary-50"
                        >
                          <component
                            :is="item.icon"
                            class="h-5 w-5 flex-shrink-0 text-font"
                            aria-hidden="true"
                          />
                          <span
                            class="ml-2 font-serif align-middle text-font"
                            >{{ item.name }}</span
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <div class="inline-flex items-center">
              <a
                href="https://developer.wax.io/"
                target="_blank"
                class="text-sm mt-[2px] font-serif font-medium text-primary hover:text-primary-900"
                >Docs</a
              >
            </div>
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-primary underline' : 'text-primary',
                  'group inline-flex hover:underline items-center rounded-md text-sm font-medium hover:text-gray-900 focus:outline-none'
                ]"
              >
                <span class="font-serif"> More </span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-primary' : 'text-primary-500',
                    'ml-1 h-4 w-4 group-hover:text-primary'
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="bg-white absolute inset-x-0 pt-full top-full z-9 hidden drop-shadow-md rounded-sm transform md:block"
                >
                  <div
                    class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3 class="text-sm font-serif font-semibold text-font">
                          Experts
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in experts"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 flex items-center rounded-md p-3 text-sm font-medium text-gray-900 hover:bg-secondary-50"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6 flex-shrink-0 text-font"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="text-sm font-serif font-semibold text-font">
                          Resources
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in resources"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 flex items-center rounded-md p-3 text-sm font-medium text-gray-900 hover:bg-secondary-50"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6 flex-shrink-0 text-font"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-primary-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <HeadingArticles />
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <div class="inline-flex items-center">
              <LoginTrigger />
            </div>
          </PopoverGroup>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-9 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y rounded-lg bg-white drop-shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div class="flex flex-row items-center">
                <img
                  class="h-10 w-10 flex-1"
                  src="@/assets/images/oig-logo.png"
                  alt="WAX OIG Logo"
                />
                <h1 class="text-md font-serif font-bold ml-4">WAX OIG</h1>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:primary"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-5 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <router-link
                    v-for="item in solutions"
                    :key="item.name"
                    :to="item.to"
                    class="relative -m-3 flex items-center rounded-lg p-3"
                  >
                    <span
                      v-if="item.highlight"
                      class="absolute top-3 left-3 h-3 w-3 bg-tertiary rounded-full animate-ping duration-1000 delay-500"
                    ></span>
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary-50 sm:h-12 sm:w-12"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-font"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="ml-3 text-sm font-serif font-bold text-primary">
                      {{ item.name }}
                    </div>
                  </router-link>
                </div>
                <div class="mt-8 text-sm flex items-center">
                  <component
                    :is="ChatBubbleLeftRightIcon"
                    class="h-4 w-4 mr-3 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    class="font-medium text-xs font-serif text-tertiary"
                  >
                    Join the Conversation
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a
                href="https://developer.wax.io/"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Docs</a
              >
              <a
                href="https://www.wax.io/community"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Community</a
              >
              <a
                href="https://labs.wax.io/"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Labs</a
              >
              <a
                href="https://www.wax.io/get-a-wallet"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Wallets</a
              >
            </div>
            <div class="mt-6 flex justify-center">
              <LoginTrigger />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
