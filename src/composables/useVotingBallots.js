import useTableRows from '@/composables/useTableRows';
import { DECIDE_ACCOUNT } from '@/constants';

export default async (ballot) => {
  return await useTableRows({
    code: DECIDE_ACCOUNT,
    scope: DECIDE_ACCOUNT,
    table: 'ballots',
    limit: 1,
    lower_bound: ballot,
    upper_bound: ballot,
    json: true
  });
};
