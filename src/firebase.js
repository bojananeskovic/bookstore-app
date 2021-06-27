import { firebase } from '@firebase/app';
import 'firebase/analytics'
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEmVIZzlrSFpLVrC3cDoBzg1W3I8U1d9M",
  authDomain: "bookstore-app-d3013.firebaseapp.com",
  projectId: "bookstore-app-d3013",
  storageBucket: "bookstore-app-d3013.appspot.com",
  messagingSenderId: "676611398407",
  appId: "1:676611398407:web:1caa2fe7678519ad3343a2",
  measurementId: "G-Z7P1EGQTT1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/*const firebaseConfig = {
  apiKey: "AIzaSyBRxsDgkUTKwriBMi_48gvZl7CfX7kY1JY",
  authDomain: "bookstoreapp-b850c.firebaseapp.com",
  projectId: "bookstoreapp-b850c",
  storageBucket: "bookstoreapp-b850c.appspot.com",
  messagingSenderId: "374877523802",
  appId: "1:374877523802:web:601b6df696436354ebad63",
  measurementId: "G-S42X6K52GK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();*/

// utils
const db = firebase.firestore();
const storage = firebase.storage().ref();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');
const booksCollection = db.collection('books');
const stationaryCollection = db.collection('stationary');
const officeSuppliesCollection = db.collection('officeSupplies');
const classbooksCollection = db.collection('classbooks');
const ranchesCollection = db.collection('ranches');
const giftsCollection = db.collection('gifts');
const boardGamesCollection = db.collection('boardGames');
const artCollection = db.collection('art');

// export utils/refs
export {
  db,
  storage,
  auth,
  usersCollection,
  booksCollection,
  stationaryCollection,
  officeSuppliesCollection,
  classbooksCollection,
  ranchesCollection,
  giftsCollection,
  boardGamesCollection,
  artCollection
}
