import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDgLGFMGyDjZQZThwSqiC20fsFMjShD98c",
	authDomain: "whatsapp-clone-57f56.firebaseapp.com",
	projectId: "whatsapp-clone-57f56",
	storageBucket: "whatsapp-clone-57f56.appspot.com",
	messagingSenderId: "76891294958",
	appId: "1:76891294958:web:59710ec17c71430fb7f7ff",
};

const app = !firebase.apps.length ? firebase.finitializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
