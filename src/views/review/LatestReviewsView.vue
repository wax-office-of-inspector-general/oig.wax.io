<script setup>
import PageContainer from '@/components/PageContainer.vue';
import SimpleHeroNavigation from '@/components/hero/SimpleHeroNavigation.vue';
import ButtonNavLink from '@/components/button/ButtonNavLink.vue';
import ReviewResults from '@/components/evaluation/ReviewResults.vue';

const title = 'Guild Reviews';
const desc = `Explore the latest Guild Reviews to uncover how WAX blockchain guilds excel in technical operations, innovation, and community engagement.`;
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

  <PageContainer>
    <ReviewResults />
  </PageContainer>
</template>
