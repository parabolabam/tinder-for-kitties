import firebase from 'firebase';
import 'firebase/firestore';

// firebase init goes here
const firebaseConfig = {
  apiKey: 'AIzaSyDpQMjQzF1Q-URsbgD3_saAeXTvlFfMcXY',
  authDomain: 'tinder-for-kitties-82ac2.firebaseapp.com',
  databaseURL: 'https://tinder-for-kitties-82ac2.firebaseio.com',
  projectId: 'tinder-for-kitties-82ac2',
  storageBucket: 'tinder-for-kitties-82ac2.appspot.com',
  messagingSenderId: '649718654423',
  appId: '1:649718654423:web:476db6279dfcfac193d792',
  measurementId: 'G-09PQF20DXX',
};

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;


// firebase collections
const usersCollection = db.collection('users');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

export {
  db,
  auth,
  currentUser,
  usersCollection,
  commentsCollection,
  likesCollection,
};
