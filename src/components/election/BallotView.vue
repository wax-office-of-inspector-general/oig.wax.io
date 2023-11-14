<script setup>
import BallotHead from './BallotHead.vue';
import BallotTimeline from './BallotTimeline.vue';
import BallotTimelineDetails from './BallotTimelineDetails.vue';
import BallotCandidates from './BallotCandidates.vue';
import BallotNomination from './BallotNomination.vue';
</script>

<template>
  <div>
    <BallotHead />
    <BallotTimeline />
    <BallotNomination />
    <BallotCandidates />
    <BallotTimelineDetails />
  </div>
</template>
