import { APIClient } from '@wharfkit/antelope';
import { CHAIN_API_URL } from '@/constants';

const waxClient = new APIClient({
  url: CHAIN_API_URL
});

export default async (payload) => {
  return await waxClient.v1.chain.get_table_rows({
    ...payload,
    json: true
  });
};
