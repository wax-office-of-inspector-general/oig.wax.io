import { OIG_ACCOUNT } from "../constants";

export default ({ permissionLevel, actor, decision }) => ({
  account: OIG_ACCOUNT,
  name: 'proclaim',
  authorization: [permissionLevel],
  data: {
    nominee: actor,
    decision: decision
  }
});
