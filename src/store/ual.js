import { defineComponent, provide, ref } from "vue";

export default defineComponent({
  setup() {
    const activeUser = ref(null);

    const ual = () => {
      activeUser.value = !activeUser.value;
    }

    provide("ual", ual);

    return { ual };
  }
});
