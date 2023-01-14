<script setup></script>

<template>
  <div class="my-14 lg:my-24 py-10">
    <div class="bg-tertiary">
      <div class="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <div
          class="rounded-lg bg-indigo-700 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
        >
          <div class="xl:w-0 xl:flex-1">
            <h2
              class="text-lg font-serif font-bold tracking-tight text-primary max-w-[500px]"
            >
              Want product news and updates?
            </h2>
            <p class="mt-3 max-w-3xl text-sm leading-6 text-white">
              Sign up for our medium newsletter to stay up to date.
            </p>
          </div>
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form class="sm:flex">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required=""
                class="w-full rounded-md px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-tertiary shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
