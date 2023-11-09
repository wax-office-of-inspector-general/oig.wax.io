import { DECIDE_ACCOUNT } from '../constants';

export default ({ permissionLevel, actor }) => ({
  account: DECIDE_ACCOUNT,
  name: 'sync',
  authorization: [permissionLevel],
  data: {
    voter: actor
  }
});
