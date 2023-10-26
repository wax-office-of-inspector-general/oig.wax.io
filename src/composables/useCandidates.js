import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'oig',
    scope: 'oig',
    table: 'nominees',
    limit: 30,
    reverse: false,
    show_payer: false
  });
};
