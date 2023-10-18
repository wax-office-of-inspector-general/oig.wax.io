import { APIClient } from '@wharfkit/antelope';

const client = new APIClient({
  url: 'https://wax.greymass.com'
});

export function useClient() {
  return client;
}
