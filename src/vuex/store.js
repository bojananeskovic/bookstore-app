import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authorized: false,
    userProfile: {},
    booksCollection: [],
    stationaryCollection: [],
    officeSuppliesCollection: [],
    classbooksCollection: [],
    ranchesCollection: [],
    giftsCollection: [],
    boardGamesCollection: [],
    artCollection: []
  },

  actions: {

    async login({dispatch}, form) {

      // loginovanje korisnika
      const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

      // vracanje korisnika i setovanje u state-u
      dispatch('fetchUserProfile', user);

      router.push('/products');

    },

    async logout({state, commit}) {

      // odjavimo korisnika sa fb
      await fb.auth.signOut();

      // resetujemo
      // commit('setUserProfile', {});
      state.userProfile = {};
      router.push('/login');

    },

    async fetchUserProfile({commit}, user) {

      // vracanje korisnika sa fb
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // postavljanje korisnika u state-u
      commit('setUserProfile', userProfile.data());

    },

    async register({dispatch}, form) {

      // registrovanje user-a
      const {user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

      // kreiranje korisnika u usersCollection na firebase-u
      await fb.usersCollection.doc(user.uid).set({
        email: form.email,
        password: form.password,
        name: form.name,
        lastName: form.lastName
      });

      // vracanje korisnika i setovanje u state-u
      dispatch('fetchUserProfile', user);

      router.push('/login');

    },
  },

  mutations:{
    setUserProfile(state, val) {
      state.userProfile = val;
      state.userProfile['id'] = fb.auth.currentUser.uid;
      console.log(state.userProfile);
    }
  }
});
