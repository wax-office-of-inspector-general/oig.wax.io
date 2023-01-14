import Vuex from "vuex";
import oig from "./modules/oig";
import election from "./modules/election";
import medium from "./modules/medium";
import guilds from "./modules/guilds";

export default new Vuex.Store({
  modules: {
    oig,
    election,
    guilds,
    medium
  }
});
