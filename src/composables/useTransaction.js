import { useSession, useSessionKit } from './useSession';
import { notify } from "@kyvg/vue3-notification";

const session = useSession();
const { transact } = useSessionKit();

export default async (actions) => {
  if (!session.value) throw new Error('No active session');

  try {
    await transact(actions);
    notify({
      title: "Sucess",
      text: "The action was successful",
      type: "success"
    });
  } catch (err) {
    notify({
      title: "Error",
      text: err,
      type: "error"
    });
    console.log('error caught in transact', err);
  }
};
