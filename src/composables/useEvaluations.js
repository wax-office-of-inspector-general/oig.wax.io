import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'guilds.oig',
    scope: 'guilds.oig',
    table: 'evaluations',
    limit: 40,
    reverse: true,
    show_payer: false
  });
};
