import React, { useEffect } from "react";
import "../styles/globals.css";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Loading from "../components/Loading";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			const a = async () => {
				await setDoc(
					doc(db, "users", user.uid),
					{
						email: user.email,
						lastSeen: serverTimestamp(),
						photoURL: user.photoURL,
					},
					{ merge: true }
				);
			};
			a();
		}
	}, [user]);

	if (loading) return <Loading />;
	if (!user) return <Login />;
	return <Component {...pageProps} />;
}

export default MyApp;
