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
  console.log(accounts);
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
    @update:model-value="(value) => emit('update:modelValue', value)"
  >
    <ComboboxInput
      @change="query = $event.target.value"
      :display-value="(account) => account.scope"
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
          class="relative cursor-default select-none py-2 pl-10 pr-4"
          :class="{
            'bg-teal-600 text-white': active,
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
