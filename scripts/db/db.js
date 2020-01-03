  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA53Zp7-iPbk-TqTPOoeaQF_6Z_bXJyybQ",
    authDomain: "dayshabit.firebaseapp.com",
    databaseURL: "https://dayshabit.firebaseio.com",
    projectId: "dayshabit",
    storageBucket: "dayshabit.appspot.com",
    messagingSenderId: "712089099708",
    appId: "1:712089099708:web:de3aacc73a320b6beddfb9",
    measurementId: "G-9Q3BV3SLLW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export default db 