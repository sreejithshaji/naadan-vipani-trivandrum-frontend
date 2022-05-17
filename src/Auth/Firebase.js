import firebase from 'firebase';

const firebaseConfig = {
    // apiKey: "AIzaSyCAXbQ9-j_ah0scqU8h_oea7zn7IN7EgXo",
    // authDomain: "authtestotp-20c40.firebaseapp.com",
    // projectId: "authtestotp-20c40",
    // storageBucket: "authtestotp-20c40.appspot.com",
    // messagingSenderId: "406911817001",
    // appId: "1:406911817001:web:a52cc222e6d10a07b3d338",
    // measurementId: "G-WB3117M2ZN"
    apiKey: "AIzaSyCTdukSSNg3_hcMKE1WN710JUaCLxf1TQc",
    authDomain: "naadanvipani.firebaseapp.com",
    projectId: "naadanvipani",
    storageBucket: "naadanvipani.appspot.com",
    messagingSenderId: "200175687290",
    appId: "1:200175687290:web:7bed491b0b9c75ab76cdc3",
    measurementId: "G-LQHZ6BXRW4"
  };

firebase.initializeApp(firebaseConfig)

export default firebase