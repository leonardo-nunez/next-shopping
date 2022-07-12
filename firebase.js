import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBefhQWsLiHGVIYAD66rnHSiN_5-QtH6Vw',
  authDomain: 'next-product-catalog-leo.firebaseapp.com',
  projectId: 'next-product-catalog-leo',
  storageBucket: 'next-product-catalog-leo.appspot.com',
  messagingSenderId: '481589167317',
  appId: '1:481589167317:web:e1a3112c74ace485054e5c',
};

const firebaseapp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebase.storage();

export { db, auth, storage };
