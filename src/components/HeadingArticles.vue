<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const store = useStore();

const articles = computed(() => store.state.medium.articles.slice(0, 2));
const loading = computed(() => store.state.medium.loading);

onMounted(() => {
  if (!articles.value.length) store.dispatch('medium/fetchArticles');
});
</script>

<template>
  <div>
    <div>
      <h3 class="text-base font-serif font-bold text-font">Latest Articles</h3>
      <div v-if="loading">
        <LoadingSpinner :content="'Loading Articles…'" class="mt-4" />
      </div>
      <div v-if="!loading">
        <ul role="list" class="mt-6 space-y-6">
          <li v-for="article in articles" :key="article.id" class="flow-root">
            <a
              :href="article.link"
              class="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
            >
              <div class="hidden flex-shrink-0 sm:block">
                <img
                  class="hidden h-20 w-32 rounded-md object-cover"
                  :src="article.thumbnail"
                  alt=""
                />
              </div>
              <div class="w-0 flex-1">
                <h4 class="truncate text-base font-medium text-gray-900">
                  {{ article.title }}
                </h4>
                <p class="mt-1 text-sm text-gray-500">
                  {{
                    article.description.replace(/<[^>]*>?/gm, '').slice(0, 80)
                  }}
                  ...
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-6 text-sm font-medium">
      <a
        href="https://waxoig.medium.com"
        class="text-tertiary font-serif text-xs font-bold"
      >
        View all Articles
        <span aria-hidden="true"> &rarr;</span>
    </a>
    </div>
  </div>
</template>
