export default ({ permissionLevel, actor, decision }) => ({
  account: 'oig',
  name: 'proclaim',
  authorization: [permissionLevel],
  data: {
    nominee: actor,
    decision: decision
  }
});
