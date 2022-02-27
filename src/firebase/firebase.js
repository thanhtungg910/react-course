import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBUhg4rhrXRHy3p_eGrgfI1vofwTABxGbs",
	authDomain: "login-test-2aeef.firebaseapp.com",
	databaseURL:
		"https://login-test-2aeef-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "login-test-2aeef",
	storageBucket: "login-test-2aeef.appspot.com",
	messagingSenderId: "316878281477",
	appId: "1:316878281477:web:596dab1d1079514f94b56c",
	measurementId: "G-J83MDTW44D",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
