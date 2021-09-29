import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyA6_Yjth3_riOYsf4aB9WC100H5NgVTtcM",
    authDomain: "linkedin-clone-ad498.firebaseapp.com",
    projectId: "linkedin-clone-ad498",
    storageBucket: "linkedin-clone-ad498.appspot.com",
    messagingSenderId: "239455790690",
    appId: "1:239455790690:web:089fe1b86e26c1ae6f133b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}