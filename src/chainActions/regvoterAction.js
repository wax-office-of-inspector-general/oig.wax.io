import { OIG_ACCOUNT } from '../constants';

export default ({ permissionLevel, actor }) => ({
  account: OIG_ACCOUNT,
  name: 'regvoter',
  authorization: [permissionLevel],
  data: {
    voter: actor,
    treasury_symbol: '8,VOTE',
    referrer: OIG_ACCOUNT
  }
});
