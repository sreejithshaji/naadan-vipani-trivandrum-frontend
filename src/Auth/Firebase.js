import firebase from 'firebase';

const firebaseConfig = {
    // apiKey: "AIzaSyCAXbQ9-j_ah0scqU8h_oea7zn7IN7EgXo",
    // authDomain: "authtestotp-20c40.firebaseapp.com",
    // projectId: "authtestotp-20c40",
    // storageBucket: "authtestotp-20c40.appspot.com",
    // messagingSenderId: "406911817001",
    // appId: "1:406911817001:web:a52cc222e6d10a07b3d338",
    // measurementId: "G-WB3117M2ZN"
    
    // apiKey: "AIzaSyCTdukSSNg3_hcMKE1WN710JUaCLxf1TQc",
    // authDomain: "naadanvipani.firebaseapp.com",
    // projectId: "naadanvipani",
    // storageBucket: "naadanvipani.appspot.com",
    // messagingSenderId: "200175687290",
    // appId: "1:200175687290:web:7bed491b0b9c75ab76cdc3",
    // measurementId: "G-LQHZ6BXRW4"

    apiKey: "AIzaSyBDDbwCD7e8XwkjFDBr_P3R-9d-m6p15Kg",
    authDomain: "horticorp-online-otp-auth.firebaseapp.com",
    projectId: "horticorp-online-otp-auth",
    storageBucket: "horticorp-online-otp-auth.appspot.com",
    messagingSenderId: "632252213733",
    appId: "1:632252213733:web:be23d344b2c4c7b5d1270c",
    measurementId: "G-XFYVZ3H40K"
  };

firebase.initializeApp(firebaseConfig)

export default firebase