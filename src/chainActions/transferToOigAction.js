export default ({ permissionLevel, actor, nominee }) => ({
  account: 'eosio.token',
  name: 'transfer',
  authorization: [permissionLevel],
  data: {
    from: actor,
    to: 'oig',
    quantity: '100.00000000 WAX',
    memo: `nomination fee for ${nominee}`
  }
});
