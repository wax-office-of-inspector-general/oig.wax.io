import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'treasury.oig',
    scope: 'treasury.oig',
    table: 'oig',
    limit: 40,
    reverse: false,
    show_payer: false
  });
};
