<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const store = useStore();

const oigs = computed(() => store.state.oig.oigs);
const loading = computed(() => store.state.oig.loading);

onMounted(() => {
  if (!oigs.value.length) store.dispatch("oig/fetchOigs");
});
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-lg font-bold font-serif tracking-tight text-gray-900">
            Meet our current IGs
          </h2>
          <p class="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            role="list"
            class="space-y-12 sm:grid grid-cols-3 sm:gap-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="oig in oigs" :key="oig.id">
              <div class="bg-primary border-primary border mt-2 py-5 px-7 text-sm font-serif font-medium leading-6 flex items-center space-x-4 lg:space-x-6">
                <div class="space-y-1 text-sm font-medium leading-6">
                  <h3>{{ oig.ig }}</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
