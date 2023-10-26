export default ({ permissionLevel, actor, nominee }) => ({
  account: 'oig',
  name: 'nominate',
  authorization: [permissionLevel],
  data: {
    nominator: actor,
    nominee: nominee
  }
});
