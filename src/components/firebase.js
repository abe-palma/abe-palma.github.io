import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3iX6RwF-7czn5d8hdlSkhp6wWNzUT-sU",
    authDomain: "portfolio-139ee.firebaseapp.com",
    databaseURL: "https://portfolio-139ee.firebaseio.com",
    projectId: "portfolio-139ee",
    storageBucket: "portfolio-139ee.appspot.com",
    messagingSenderId: "35826138613",
    appId: "1:35826138613:web:f11b0effcc5d0266c474bc"

});

var db = firebaseApp.firestore();

export { db};