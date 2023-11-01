import { OIG_ACCOUNT } from "../constants";

export default ({ permissionLevel, actor }) => ({
  account: OIG_ACCOUNT,
  name: 'regvoter',
  authorization: [permissionLevel],
  data: {
    voter: actor
  }
});
