<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useSessionKit, useSession } from '../../composables/useSession';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import CandidateCard from './CandidateCard.vue';
import ButtonText from '../button/ButtonText.vue';
import ButtonAction from '../button/ButtonAction.vue';

const store = useStore();

const nominees = computed(() => store.state.ballot.nominees);

const sessionWallet = 'professorwax';

const { login, logout, transact } = useSessionKit();
const session = useSession();

console.log(session.value);

onMounted(() => {
  if (!nominees.value.length) store.dispatch('ballot/fetchNominees');
});
</script>
<template>
  <div class="py-12 lg:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="border border-primary-100 rounded-md">
        <div class="bg-primary-50 px-5 py-3">
          <div class="flex justify-between items-center">
            <h2 class="text-md  font-serif tracking-tight sm:text-lg">
              Nominees
            </h2>

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
          <table
            class="table-auto w-full mt-0 border-separate border-spacing-y-0"
          >
            <thead>
              <tr>
                <th class="text-left font-semibold py-2 px-4">
                  <p class="text-xs font-bold uppercase text-font/50">
                    Nominee
                  </p>
                </th>
                <th class="text-right font-semibold py-2 px-4">
                  <p class="text-xs font-bold uppercase text-font/50">
                    has accepted
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(nominee, index) in nominees"
                :key="nominee.id"
                class="border-b border-b-gray-100"
                :class="{
                  'bg-gray-50': index % 2
                }"
              >
                <td class="py-4 px-4">
                  <p class="font-serif text-sm">{{ nominee.nominee }}</p>

                  <ButtonAction
                    v-if="sessionWallet === nominee.nominee && !nominee.accepted"
                    text="Accept Nomination"
                    href="#"
                    cssClass="text-xs mr-5 px-2 py-1 mt-2"
                  />
                </td>
                <td class="py-4 px-4">
                  <div class="flex justify-end items-center">

                    <CheckCircleIcon
                      v-if="nominee.accepted"
                      class="h-8 w-8 text-green-500"
                    />
                    <XCircleIcon
                      v-if="!nominee.accepted"
                      class="h-8 w-8 text-gray-300"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
