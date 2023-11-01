import { ref } from 'vue';
import { BrowserLocalStorage, SessionKit } from '@wharfkit/session';
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor';
import { WalletPluginCloudWallet } from '@wharfkit/wallet-plugin-cloudwallet';
import { WalletPluginWombat } from '@wharfkit/wallet-plugin-wombat';

import WebRenderer from '@wharfkit/web-renderer';
import { CHAIN_API_URL, CHAIN_ID } from '@/constants';

const ui = new WebRenderer();

const authStorageKey = 'wax-oig-auth';

const sessionKit = new SessionKit({
  appName: 'WAX OIG website',
  chains: [
    {
      id: CHAIN_ID,
      url: CHAIN_API_URL
    }
  ],
  storage: new BrowserLocalStorage(authStorageKey),
  ui,
  walletPlugins: [
    new WalletPluginAnchor(),
    new WalletPluginCloudWallet(),
    new WalletPluginWombat()
  ]
});

const session = ref(null);

sessionKit.restore().then((s) => {
  session.value = s;
});

export function useSessionKit() {
  const login = async function () {
    const response = await sessionKit.login();
    session.value = response.session;
  };

  const logout = async function () {
    await sessionKit.logout(session.value);
    session.value = undefined;
  };

  const transact = async function (actions) {
    if (!session.value) {
      throw new Error('cannot transact without a session');
    }

    await session.value.transact({ actions });
  };

  return {
    sessionKit,
    login,
    logout,
    transact
  };
}

export function useSession() {
  return session;
}
