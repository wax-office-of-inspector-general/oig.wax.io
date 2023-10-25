import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'labs.wax',
    scope: 'labs.wax',
    table: 'proposals',
    limit: 1000,
    reverse: true,
    show_payer: false
  });
};
