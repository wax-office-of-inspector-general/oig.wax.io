<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from "@headlessui/vue";
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
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import HeadingArticles from "./HeadingArticles.vue";
import WalletButton from "./WalletButton.vue";

const solutions = [
  {
    name: "The OIG",
    description:
      "Get a better understanding of the OIG and it's role in the WAX ecosystem.",
    href: "/the-oig",
    icon: BuildingLibraryIcon,
    highlight: false
  },
  {
    name: "WAX Guilds",
    description:
      "Explore our validators and how they add value to a growing environment.",
    href: "#",
    icon: CubeTransparentIcon,
    highlight: false
  },
  {
    name: "Guild Evaluations",
    description:
      "Our transparent,heuristic and unique aproach to evaluate WAX guilds.",
    href: "#",
    icon: ShieldCheckIcon,
    highlight: false
  },
  {
    name: "Get Involved, Vote now!",
    description:
      "Participate in Blockchain governance, be it as a voter, nominator or Nominee!",
    href: "/oig-election",
    icon: ArchiveBoxIcon,
    highlight: true
  }
];
const callsToAction = [
  {
    name: "Join the Conversation",
    href: "https://t.me/guilds_wax_io",
    icon: ChatBubbleLeftRightIcon
  },
  {
    name: "Learn More about WAX",
    href: "https://www.wax.io/",
    icon: InformationCircleIcon
  }
];
const experts = [
  {
    name: "Labs",
    href: "https://labs.wax.io/",
    icon: BeakerIcon
  },
  { name: "Jobs", href: "https://t.me/waxjobs", icon: BriefcaseIcon }
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Wallets", href: "#", icon: WalletIcon }
];
</script>

<template>
  <Popover class="absolute top-0 left-0 w-full z-50">
    <div class="pointer-events-none absolute inset-0 z-30" aria-hidden="true" />
    <div class="relative z-50">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8"
      >
        <div>
          <a href="/" class="flex">
            <span class="sr-only">WAX OIG</span>
            <img
              class="h-8 w-auto sm:h-14"
              src="@/assets/images/oig-logo.png"
              alt="WAX OIG Logo"
            />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:primary"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div
          class="hidden md:flex md:flex-1 md:items-center md:justify-between"
        >
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2'
                ]"
              >
                <span class="font-serif">Governance</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                  class="absolute inset-x-0 bg-secondary top-full z-10 hidden transform  shadow-lg md:block"
                >
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
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
                            <p
                              class="text-base font-serif font-bold text-gray-900"
                            >
                              {{ item.name }}
                            </p>
                            <p class="mt-2 text-sm text-gray-100">
                              {{ item.description }}
                            </p>
                          </div>
                          <p
                            class="font-serif mt-2 text-xs font-medium text-tertiary lg:mt-4"
                          >
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50">
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
                          class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <component
                            :is="item.icon"
                            class="h-5 w-5 flex-shrink-0 text-font"
                            aria-hidden="true"
                          />
                          <span class="ml-3 font-serif text-xs text-tertiary">{{
                            item.name
                          }}</span>
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
                class="text-base font-serif font-medium text-gray-500 hover:text-gray-900"
                >Docs</a
              >
            </div>
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2'
                ]"
              >
                <span class="font-serif">More</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                  class="absolute inset-x-0 bg-secondary top-full z-10 hidden transform md:block"
                >
                  <div class="absolute inset-0 flex bg-secondary">
                    <div class="w-1/2" />
                    <div class="w-1/2" />
                  </div>
                  <div
                    class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3
                          class="text-base font-serif font-bold text-gray-500"
                        >
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
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
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
                        <h3
                          class="text-base font-serif font-bold text-gray-500"
                        >
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
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
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
                      class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <HeadingArticles />
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <WalletButton />
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
        class="absolute inset-x-0 top-0 z-50 origin-top-right transform bg-secondary p-2 transition md:hidden"
      >
        <div
          class="divide-y divide-slate-50 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="@/assets/images/oig-logo.png"
                  alt="WAX OIG Logo"
                />
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
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="relative -m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <span
                      v-if="item.highlight"
                      class="absolute top-4 left-4 h-2 w-2 bg-tertiary rounded-full animate-ping duration-1000 delay-500"
                    ></span>
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-font"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      class="ml-3 text-sm font-serif font-bold text-gray-900"
                    >
                      {{ item.name }}
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-sm flex items-center ">
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
                href="#"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Docs</a
              >
              <a
                href="#"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Community</a
              >
              <a
                href="#"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Labs</a
              >
              <a
                href="#"
                class="rounded-md text-sm font-sans font-medium text-gray-900 hover:text-gray-700"
                >Wallets</a
              >
            </div>
            <div class="mt-6">

              <a
                href="#"
                class="bg-tertiary w-full inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 font-serif font-bold px-4 py-2 text-sm text-white shadow-sm hover:bg-indigo-700"
                >Login</a
              >
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
