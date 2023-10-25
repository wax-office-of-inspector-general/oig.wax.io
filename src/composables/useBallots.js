import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'oig',
    scope: 'oig',
    table: 'election',
    limit: 20,
    reverse: false,
    show_payer: false
  });
};
