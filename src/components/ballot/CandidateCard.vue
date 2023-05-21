<script setup>

const props = defineProps({
  candidate: Object
});
</script>

<template>
  <div class="space-y-4">
    <div class="relative aspect-w-3 aspect-h-2 bg-secondary-50 w-full">
      <img
        class="rounded-md object-cover shadow-sm w-full indent-[-9999px]"
        :src="props.candidate.picture"
        :alt="props.candidate.name"
      />
    </div>

    <div class="space-y-4">
      <div class="space-y-1 text-lg font-medium leading-6">
        <h3 class="text-base font-serif font-bold">
          {{ props.candidate.name }}
        </h3>
        <p class="text-xs mt-0 leading-snug opacity-50">
          {{ props.candidate.owner }}
        </p>
      </div>
      <ul role="list" class="flex space-x-5">
        <li>
          <a
            :href="`https://twitter.com/${props.candidate.twitter}`"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            :href="props.candidate.telegram"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  </div>
</template>
