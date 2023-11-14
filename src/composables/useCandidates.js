import useTableRows from '@/composables/useTableRows';
import { OIG_ACCOUNT } from '@/constants';

export default async () => {
  return await useTableRows({
    code: OIG_ACCOUNT,
    scope: OIG_ACCOUNT,
    table: 'nominees',
    limit: 30,
    reverse: false,
    show_payer: false
  });
};
