import { useSession, useSessionKit } from './useSession';
import { notify } from '@kyvg/vue3-notification';

const session = useSession();
const { transact } = useSessionKit();

export default async (actions, success = () => {}, error = () => {}) => {
  if (!session.value) throw new Error('No active session');

  try {
    await transact(actions);
    // success();
    notify({
      title: 'Success',
      text: 'The action was successful',
      type: 'success'
    });
  } catch (err) {
    // error(err);
    notify({
      title: 'Error',
      text: err,
      type: 'error'
    });
    console.log('error caught in transact', err);
  }
};
