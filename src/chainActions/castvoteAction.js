import { DECIDE_ACCOUNT } from '../constants';

export default ({ permissionLevel, actor, ballot, candidateAccount }) => ({
  account: DECIDE_ACCOUNT,
  name: 'castvote',
  authorization: [permissionLevel],
  data: {
    voter: actor,
    options: [candidateAccount],
    ballot_name: ballot
  }
});
