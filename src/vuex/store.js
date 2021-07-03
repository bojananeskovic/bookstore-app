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
  mutations:{
    setUserProfile(state, val) {
      state.userProfile = val;
      state.userProfile['id'] = fb.auth.currentUser.uid;
      console.log(state.userProfile);
    }
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

    // ! Book Products Methods
    // * Get All Books Methods
    async getBookCollection({state}) {

      let bookProductsRef = fb.booksCollection;
      try {
        let allBookProductsSnapshot = await bookProductsRef.get();
        state.booksCollection = [];
        allBookProductsSnapshot.forEach(doc => {
          const singleBookProduct = doc.data();
          singleBookProduct["id"] = doc.id;
          state.booksCollection.push(singleBookProduct);
          console.log(singleBookProduct);
        })
      } catch (error) {
        console.log(error);
      }

    },

    async deleteBookProduct({state}, id) {
      try {
        await fb.booksCollection.doc(id).delete();
        alert('Successfully deleted Product');
      } catch(error) {
        console.log(error);
      }
    },

    async updateBookProduct({}, itemForUpdate) {
      try {
        await fb.booksCollection.doc(itemForUpdate.id).update({
          name: itemForUpdate.name,
          price: itemForUpdate.price,
          src: itemForUpdate.src
        });
        alert("Book was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createBookProduct({state}, payload) {
      const bookProduct = {
        name: payload.name,
        price: payload.price,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.booksCollection.add(bookProduct);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("bookProductImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.booksCollection.doc(key).get();
      await fb.booksCollection.doc(key).update({
        src: imageUrl
      });
    },

    // ! Stationary Products Methods
    // * Get All Stationaries Methods
    async getStationaryCollection({state}) {

      let stationaryProductsRef = fb.stationaryCollection;
      try {
        let allStationaryProductsSnapshot = await stationaryProductsRef.get();
        state.stationaryCollection = [];
        allStationaryProductsSnapshot.forEach(doc => {
          const singleStationaryProduct = doc.data();
          singleStationaryProduct["id"] = doc.id;
          state.stationaryCollection.push(singleStationaryProduct);
          console.log(singleStationaryProduct);
        })
      } catch (error) {
        console.log(error);
      }

    },

    async deleteStationaryProduct({state}, id) {
      try {
        await fb.stationaryCollection.doc(id).delete();
        alert('Successfully deleted Product');
      } catch(error) {
        console.log(error);
      }
    },

    async updateStationaryProduct({}, itemForUpdate) {
      try {
        await fb.stationaryCollection.doc(itemForUpdate.id).update({
          name: itemForUpdate.name,
          price: itemForUpdate.price,
          src: itemForUpdate.src
        });
        alert("Stationary was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createStationaryProduct({state}, payload) {
      const stationaryProduct = {
        name: payload.name,
        price: payload.price,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.stationaryCollection.add(stationaryProduct);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("stationaryProductImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.stationaryCollection.doc(key).get();
      await fb.stationaryCollection.doc(key).update({
        src: imageUrl
      });
    },

    // ! Office Supplies Products Methods
    async getOfficeSuppliesCollection({state}) {

      let officeSuppliesProductsRef = fb.officeSuppliesCollection;
      try {
        let allOfficeSuppliesProductsSnapshot = await officeSuppliesProductsRef.get();
        state.officeSuppliesCollection = [];
        allOfficeSuppliesProductsSnapshot.forEach(doc => {
          const singleOfficeSuppliesProduct = doc.data();
          singleOfficeSuppliesProduct["id"] = doc.id;
          state.officeSuppliesCollection.push(singleOfficeSuppliesProduct);
          console.log(singleOfficeSuppliesProduct);
        })
      } catch (error) {
        console.log(error);
      }

    },

    async deleteOfficeSuppliesProduct({state}, id) {
      try {
        await fb.officeSuppliesCollection.doc(id).delete();
        alert('Successfully deleted Product');
      } catch(error) {
        console.log(error);
      }
    },

    async updateOfficeSuppliesProduct({}, itemForUpdate) {
      try {
        await fb.officeSuppliesCollection.doc(itemForUpdate.id).update({
          name: itemForUpdate.name,
          price: itemForUpdate.price,
          src: itemForUpdate.src
        });
        alert("Office Supplies was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createOfficeSuppliesProduct({state}, payload) {
      const officeSuppliesProduct = {
        name: payload.name,
        price: payload.price,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.officeSuppliesCollection.add(officeSuppliesProduct);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("officeSuppliesProductImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.officeSuppliesCollection.doc(key).get();
      await fb.officeSuppliesCollection.doc(key).update({
        src: imageUrl
      });
    }

  }
});
