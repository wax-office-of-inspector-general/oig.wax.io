<script setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
} from '@headlessui/vue';
import { onMounted, ref, watch } from 'vue';
import useAccountsQuery from '../../composables/useAccountsQuery';

const modelValue = ref();
const query = ref('');
const accountsList = ref([]);
const loadAccounts = useAccountsQuery;

const refreshAccountsList = async () => {
  const accounts = await loadAccounts(query.value);
  accountsList.value = accounts.rows;
};

onMounted(() => {
  refreshAccountsList();
});

watch(query, () => {
  refreshAccountsList();
});
</script>

<template>
  <Combobox
    :model-value="modelValue"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <ComboboxInput
      @change="query = $event.target.value"
      :display-value="(account) => account"
      class="block w-full rounded-sm px-3 py-1.5 text-gray-900 border border-gray-200 placeholder:text-gray-400 focus:outline-none outline-none sm:text-sm sm:leading-6"
      placeholder="yourwallet.wam"
    />
    <ComboboxOptions
      class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
    >
      <div
        v-if="accountsList.length === 0 && query !== ''"
        class="relative cursor-default select-none py-2 px-4 text-gray-700"
      >
        No accoutns found.
      </div>
      <ComboboxOption
        v-for="account in accountsList"
        :key="account.scope"
        :value="account.scope"
        v-slot="{ selected, active }"
      >
        <li
          class="relative cursor-pointer select-none py-2 px-4 w-36"
          :class="{
            'bg-primary text-white': active,
            'text-gray-900': !active
          }"
        >
          <span
            class="block truncate"
            :class="{ 'font-medium': selected, 'font-normal': !selected }"
          >
            {{ account.scope }}
          </span>
        </li>
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>
