import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOAQWLI05fIWNAsyz4bWRUr7wwwOiCWXA",
  authDomain: "disneyplus-clone-53e41.firebaseapp.com",
  projectId: "disneyplus-clone-53e41",
  storageBucket: "disneyplus-clone-53e41.appspot.com",
  messagingSenderId: "866747345686",
  appId: "1:866747345686:web:07cb1f0e9645d98c6d7e37",
  measurementId: "G-BY47XRHJGZ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth();
const provider = new GoogleAuthProvider();;
const storage = getStorage();


export { auth, provider, storage,signInWithPopup };
export default db;