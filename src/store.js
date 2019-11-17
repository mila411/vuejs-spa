import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hedgehogs: [],
    apiUrl: "http://127.0.0.1:58889/api/"
  },
  mutations: {
    setHedgehogs(state, payload) {
      state.hedgehogs = payload;
    }
  },
  actions: {
    async getHedgehogs({ state, commit }, color) {
      try {
        let response = await axios.get(`${state.apiUrl}hedgehogs/?color=`+ color);
        commit("setHedgehogs", response.data);
      } catch (error) {
        commit("setHedgehogs", []);
      }
    }
  }
});
