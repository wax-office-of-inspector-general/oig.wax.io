<script setup>
import BallotTimeline from './BallotTimeline.vue';
import BallotTimelineDetails from './BallotTimelineDetails.vue';
import BallotCandidates from './BallotCandidates.vue';
import BallotNomination from './BallotNomination.vue';

</script>

<template>
  <div>
    <BallotTimeline />
    <BallotNomination />
    <BallotCandidates />
    <BallotTimelineDetails />
  </div>
</template>
