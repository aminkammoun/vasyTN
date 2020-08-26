import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: "",
    userProfil: [],

    clear() {
      (this.name = ""),
        (this.familyName = ""),
        (this.carModel = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.password = "");
    },
  },
});
