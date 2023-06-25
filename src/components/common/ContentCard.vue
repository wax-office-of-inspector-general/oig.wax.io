<script setup></script>

<template>
  <div class="border border-primary-100 rounded-md">
    <div class="bg-primary-50 px-5 py-3">
      <div class="flex justify-between items-center">
        <h2 class="text-md font-serif tracking-tight sm:text-lg">Nominees</h2>

        <ButtonAction
          :onClick="
            () => {
              console.log('jo');
            }
          "
          text="Nominate"
          cssClass="text-xs"
        />
      </div>
    </div>

    <div class="pt-3">
      <p>Content</p>
    </div>
  </div>
</template>
