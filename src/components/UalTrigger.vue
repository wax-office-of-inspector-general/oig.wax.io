<template>
  <div class="">
    <div ref="ual-mount-point"></div>
  </div>
</template>

<script>
import { UALJs } from "ual-plainjs-renderer";
window.global = window;

/* eslint-disable no-console */
export default {
  name: "ualTrigger",
  async mounted() {
    const self = this;
    const options = this.options;

    const ual = new UALJs(
      function (...arg) {
        return self.loginCallback(...arg);
      },
      options.nets,
      options.name,
      options.authenticators.map((Authenticator) => Authenticator),
      { containerElement: this.$refs["ual-mount-point"] }
    );

    ual.init();
  },
  methods: {
    loginCallback(...args) {
      return this.$emit("login", ...args);
    }
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>
#ual-button {
  opacity: 0%!important;
  max-width: 100% !important;
  width: auto !important;
}

#ual-modal-selection-content {
  padding: 20px!important;
  width: 400px!important;
}

.ual-modal-content-description {
  font-size: 1.75rem!important;
  font-weight: bold!important;
  font-family: "MonoLisa";
  width: 90%!important;
  line-height: 1.15em;
  margin: 0 auto;
  text-align: center;
}

#ual-authenticators-list {
  margin-top: 35px;
}
</style>
