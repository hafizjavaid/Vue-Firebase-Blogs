
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAT1EHwcFOU0yv02Nt_Ykp1gcpm_Y5c3cE",
    authDomain: "vuejs-manager.firebaseapp.com",
    databaseURL: "https://vuejs-manager.firebaseio.com",
    projectId: "vuejs-manager",
    storageBucket: "vuejs-manager.appspot.com",
    messagingSenderId: "447424301273",
    appId: "1:447424301273:web:1674e0a0b8103cb430d6c8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();