import { useSession, useSessionKit } from './useSession';

const session = useSession();
const { transact } = useSessionKit();

export default (actions) => {
  if (!session.value) throw new Error('No active session');

  try {
    transact(actions);
  } catch (err) {
    console.log('error caught in transact', err);
  }
};
