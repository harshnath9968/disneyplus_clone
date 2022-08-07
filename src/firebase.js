import firebase from "firebase";
import React from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCOAQWLI05fIWNAsyz4bWRUr7wwwOiCWXA",
    authDomain: "disneyplus-clone-53e41.firebaseapp.com",
    projectId: "disneyplus-clone-53e41",
    storageBucket: "disneyplus-clone-53e41.appspot.com",
    messagingSenderId: "866747345686",
    appId: "1:866747345686:web:07cb1f0e9645d98c6d7e37",
    measurementId: "G-BY47XRHJGZ"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.authGoogleAuthProvider();
  const storage=firebase.storage();


  export {auth,provider,storage};
  export default db;