import { createApp } from 'vue';
import { ref } from 'vue';
import { BrowserLocalStorage, SessionKit } from '@wharfkit/session';
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor';
import { WalletPluginCloudWallet } from '@wharfkit/wallet-plugin-cloudwallet';
import WebUIRenderer from '@wharfkit/web-ui-renderer';

import store from './store';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

const ui = new WebUIRenderer();

const authStorageKey = 'wax-oig-auth';

let sessionKit = new SessionKit({
  appName: 'wax-oig',
  chains: [
    {
      id: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
      url: 'https://wax.greymass.com'
    }
  ],
  storage: new BrowserLocalStorage(authStorageKey),
  ui,
  walletPlugins: [new WalletPluginAnchor(), new WalletPluginCloudWallet()]
});

const session = ref(null);

if (localStorage.getItem(`wharf-${authStorageKey}-sessions`)) {
  sessionKit.restore().then((s) => {
    session.value = s;
  });
}

app.provide('$sessionKit', sessionKit);
app.provide('$session', session);

app.use(store);
app.use(router);

app.mount('#app');
