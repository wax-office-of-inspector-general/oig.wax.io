<script setup>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import ButtonText from './button/ButtonText.vue';
import ButtonSecondary from './button/ButtonSecondary.vue';

const store = useStore();

const articles = computed(() => store.state.medium.articles.slice(0, 3));
const loading = computed(() => store.state.medium.loading);

onMounted(() => {
  if (!articles.value.length) store.dispatch('medium/fetchArticles');
});

const mediumLink = 'https://waxoig.medium.com/';
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
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
      <div class="grid grid-cols-1 gap-x-12 gap-y-20 lg:mx-0 lg:grid-cols-3">
        <article
          v-for="article in articles"
          :key="article.guid"
          class="bg-secondary-50 px-5 py-6 drop-shadow-sm rounded-md"
        >
          <div class="relative w-full hidden">
            <img
              :src="article.thumbnail"
              alt=""
              class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>
          <div>
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
              <p class="mt-5 line-clamp-3 text-base leading-6 text-font">
                {{
                  article.description.replace(/<[^>]*>?/gm, '').slice(0, 100)
                }}
                …
              </p>
              <div class="align-self-end">
                <ButtonText
                  :href="article.link"
                  text="View Article"
                  cssClass="mt-5 justi inline-block"
                />
              </div>
            </a>
          </div>
        </article>
      </div>
    </div>
    <div class="mx-auto max-w-xl mt-10 text-center">
      <ButtonSecondary
        :href="mediumLink"
        text="Continue Reading"
        cssClass="text-sm"
      />
    </div>
  </div>
</template>
