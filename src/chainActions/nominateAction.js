import { OIG_ACCOUNT } from "../constants";

export default ({ permissionLevel, actor, nominee }) => {
  return {
  account: OIG_ACCOUNT,
  name: 'nominate',
  authorization: [permissionLevel],
  data: {
    nominator: actor,
    nominee: nominee
  }
}
};
