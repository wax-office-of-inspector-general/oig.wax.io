<script setup>
const CalendarUrl =
  'https://calendar.google.com/calendar/embed?src=wax.oig%40gmail.com&ctz=Europe%2FAmsterdam';
</script>
<template>
  <div class="p-5 bg-white drop-shadow rounded-md">
    <div class="drops-shadow-md rounded-md">
      <div>
        <iframe
          :src="CalendarUrl"
          style="border: 0"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>
</template>
