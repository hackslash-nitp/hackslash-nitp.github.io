import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApPqV50wqW_pxUrqqHl4ZB-0O-a1BoTFY",
    authDomain: "hackslash-17.firebaseapp.com",
    databaseURL: "https://hackslash-17.firebaseio.com",
    projectId: "hackslash-17",
    storageBucket: "hackslash-17.appspot.com",
    messagingSenderId: "981722954585",
    appId: "1:981722954585:web:e2ed3d02d85a5445c86a48",
    measurementId: "G-BF8Y47X72L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;