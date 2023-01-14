<script setup>
import UalTrigger from "./UalTrigger.vue";
// import Wombat from "ual-wombat";
import { Anchor } from "ual-anchor";
import { Wax } from "ual-wax";

const appName = "WAX OIG Login";

const chain = {
  chainId:
    "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [{ protocol: "https", host: "wax.eosphere.io", port: 443 }]
}

const anchor = new Anchor([chain], { appName: appName });
const wax = new Wax([chain], { appName: appName });

const opts = {
  name: "WAX OIG Login",
  nets: [chain],
  authenticators: [
    anchor, wax
  ]
};

async function userCallback(users) {
  const loggedInUser = users[0];
  let name = await loggedInUser.getAccountName();
  let permission = loggedInUser.requestPermission;
  //console.info("User Information:");
  //console.info("Account Name:", name);
  //console.info("Permission:", permission);
}
</script>
<template>
  <div class="flex items-center md:ml-12 relative">
    <div class="absolute">
      <ual-trigger :options="opts" @login="userCallback" />
    </div>
    <a
      href="#"
      class="bg-tertiary ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 font-serif font-bold px-4 py-2 text-sm text-white shadow-sm hover:bg-indigo-700"
      >Login</a
    >
  </div>
</template>
