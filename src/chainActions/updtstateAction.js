import { OIG_ACCOUNT } from '../constants';

export default ({ permissionLevel }) => ({
  account: OIG_ACCOUNT,
  name: 'updtstate',
  authorization: [permissionLevel],
  data: {}
});
