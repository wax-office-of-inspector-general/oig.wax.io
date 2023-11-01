import { OIG_ACCOUNT } from "../constants";

export default ({ permissionLevel, actor, nominee }) => ({
  account: 'eosio.token',
  name: 'transfer',
  authorization: [permissionLevel],
  data: {
    from: actor,
    to: OIG_ACCOUNT,
    quantity: '100.00000000 WAX',
    memo: `nomination fee for ${nominee}`
  }
});
