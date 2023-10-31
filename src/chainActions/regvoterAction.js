export default ({ permissionLevel, actor }) => ({
  account: 'oig',
  name: 'regvoter',
  authorization: [permissionLevel],
  data: {
    voter: actor
  }
});
