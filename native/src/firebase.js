import firebase from 'firebase';
import firebaseConfig from './env/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
