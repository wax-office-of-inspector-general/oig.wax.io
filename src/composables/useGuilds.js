import useTableRows from '@/composables/useTableRows';

export default async () => {
  return await useTableRows({
    code: 'guilds.oig',
    scope: 'guilds.oig',
    table: 'guilds',
    limit: 40,
    reverse: false,
    show_payer: false
  });
};
