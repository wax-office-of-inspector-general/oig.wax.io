<script setup>
import SimpleHeroNavigation from '@/components/hero/SimpleHeroNavigation.vue';
</script>
<template>
  <SimpleHeroNavigation :title="title" :desc="desc">
    <template v-slot:nav>
      <ButtonNavLink
        :route="{ name: 'guild-reviews-latest' }"
        text="Latest Reviews"
      />
      <ButtonNavLink
        :route="{ name: 'guild-reviews-timeline' }"
        text="Timeline"
      />
      <ButtonNavLink
        :route="{ name: 'guild-reviews-process' }"
        text="Process"
      />
    </template>
  </SimpleHeroNavigation>
</template>
