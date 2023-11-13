<script setup>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import ButtonText from '@/components/button/ButtonText.vue';
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
import LoadingSpinner from './LoadingSpinner.vue';

const store = useStore();

const articles = computed(() => store.state.medium.articles.slice(0, 3));
const loading = computed(() => store.state.medium.loading);

onMounted(() => {
  if (!articles.value.length) store.dispatch('medium/fetchArticles');
});

const mediumLink = 'https://waxoig.medium.com/';
</script>

<template>
  <div class="mx-auto container py-12 lg:py-20">
    <div class="mx-auto max-w-xl text-center mb-10">
      <h2 class="text-xl font-serif tracking-tight text-font">
        From our Medium
      </h2>
      <p class="mt-3 text-sm leading-normal text-font">
        Discover the Role of the WAX OIG: Ensuring Trust and Accountability in
        the WAX Network. Read our regular updates and stay up-to-date.
      </p>
    </div>
    <div v-if="loading">
      <LoadingSpinner :content="'Loading Articles…'" class="mt-4" />
    </div>
    <div v-if="!loading">
      <div class="grid grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:grid-cols-3">
        <article
          v-for="article in articles"
          :key="article.guid"
          class="relative flex group"
        >
          <div class="bg-white drop-shadow-sm hover:drop-shadow-md px-5 py-6 rounded-md relative z-20">
            <div class="relative w-full hidden z-20">
              <img
                :src="article.thumbnail"
                alt=""
                class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
            <div class="relative z-20">
              <div class="hidden items-center gap-x-4 text-xs">
                <span class="text-gray-500">{{ article.pubDate }}</span>
              </div>
              <a
                :href="article.link"
                target="_blank"
                rel="nofollow"
                class="group relative flex flex-col"
              >
                <h3 class="text-base font-serif leading-6 text-font">
                  {{ article.title }}
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-font">
                  {{
                    article.description.replace(/<[^>]*>?/gm, '').slice(0, 100)
                  }}
                  …
                </p>
                <div class="align-self-end">
                  <ButtonText
                    :href="article.link"
                    text="View Article"
                    cssClass="mt-5 text-xs inline-block"
                  />
                </div>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="mx-auto max-w-xl mt-10 text-center">

      <a
        :href="mediumLink"
        target="_blank"
        class="inline-block rounded-md whitespace-nowrap bg-primary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-primary-700 hover:text-white focus-visible:outline-none outline-none"
      >
        View all Articles
        <span class="ml-1" aria-hidden="true"> &rarr;</span>
    </a>
    </div>
  </div>
</template>
