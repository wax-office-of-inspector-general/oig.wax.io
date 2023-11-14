import useTableByScope from './useTableByScope';

export default async (accountQuery) => {
  return await useTableByScope({
    code: 'eosio',
    table: 'userres',
    limit: 5,
    lower_bound: accountQuery,
    upper_bound: accountQuery.padEnd(12, 'z')
  });
};
