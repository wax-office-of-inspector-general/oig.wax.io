import { useSession, useSessionKit } from './useSession';

const session = useSession();
const { transact } = useSessionKit();

export default async (actions) => {
  if (!session.value) throw new Error('No active session');

  try {
    await transact(actions);
  } catch (err) {
    console.log('error caught in transact', err);
  }
};
