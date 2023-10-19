const config = {
  chainAPIUrl: import.meta.env.VITE_CHAIN_API_URL,
  network: {
    id: import.meta.env.VITE_CHAIN_ID,
    url: import.meta.env.VITE_WALLET_URL
  }
}

export default function useConfig() {
  return config;
}
