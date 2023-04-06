<script setup>
import { inject, defineProps } from 'vue';
import { getCurrentInstance } from 'vue';

defineProps({
  msg: String
});

const app = getCurrentInstance();

const sessionKit = inject('$sessionKit');
const session = inject('$session');

async function login() {
  const response = await sessionKit.login();
  console.log(app.appContext.config.globalProperties)
  session.value = response.session;
}
async function logout() {
  await sessionKit.logout(session.value);
  session.value = undefined;
}
async function transact() {
  if (!session.value) {
    throw new Error('cannot transact without a session');
  }
  const action = {
    account: 'eosio.token',
    name: 'transfer',
    authorization: [session.value.permissionLevel],
    data: {
      from: session.value.actor,
      to: 'teamgreymass',
      quantity: '0.00000001 WAX',
      memo: 'Yay WharfKit! Thank you <3'
    }
  };
  session.value.transact({ action }, { broadcast: false }).catch((e) => {
    console.log('error caught in transact', e);
  });
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div v-if="session">
      <p>Logged in as {{ session.actor }}</p>
      <button type="button" class="primary" @click="transact">
        Test Transaction (No Broadcast)
      </button>
      <button type="button" @click="logout">Logout</button>
    </div>
    <div v-else>
      <button type="button" @click="login">Login</button>
    </div>
  </div>
</template>

<style scoped></style>
