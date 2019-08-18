import firebase from 'firebase';
//<!-- The core Firebase JS SDK is always required and must be listed first -->

const firebaseConfig = {
    apiKey: "AIzaSyDmuqMSVDHyyWfzDkZGL9FZBSgHsYS0esU",
    authDomain: "datasy-e0424.firebaseapp.com",
    databaseURL: "https://datasy-e0424.firebaseio.com",
    projectId: "datasy-e0424",
    storageBucket: "",
    messagingSenderId: "314797156140",
    appId: "1:314797156140:web:af266f1190a0538e"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots:true});

export default fire;
export {db};