import { CHAIN_API_URL, CHAIN_ID, WALLET_URL } from '@/constants';

const config = {
  chainAPIUrl: CHAIN_API_URL,
  network: {
    id: CHAIN_ID,
    url: WALLET_URL
  }
};

export default function useConfig() {
  return config;
}
