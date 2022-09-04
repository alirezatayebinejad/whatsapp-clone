import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyDgLGFMGyDjZQZThwSqiC20fsFMjShD98c",
	authDomain: "whatsapp-clone-57f56.firebaseapp.com",
	projectId: "whatsapp-clone-57f56",
	storageBucket: "whatsapp-clone-57f56.appspot.com",
	messagingSenderId: "76891294958",
	appId: "1:76891294958:web:59710ec17c71430fb7f7ff",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
