import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Signin = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};
	const handleLoginWithFirebase = async () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		try {
			const result = await signInWithPopup(auth, provider);
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
		} catch (error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	};

	return (
		<div className="bg-black text-white min-h-screen px-5 my-4 mt-5">
			<div className="py-10 bg-white text-black">
				<h3> Register User </h3>
				<input
					className="border-2 mx-4"
					placeholder="Email..."
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<input
					className="border-2 mx-4"
					placeholder="Password..."
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>

				<button className="bg-blue-300" onClick={register}>
					{" "}
					Create User
				</button>
			</div>

			<div className="py-10 bg-white text-black">
				<h3> Login </h3>
				<input
					className="border-2 mx-4"
					placeholder="Email..."
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<input
					className="border-2 mx-4"
					placeholder="Password..."
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>

				<button className="bg-blue-300" onClick={login}>
					{" "}
					Login
				</button>
			</div>

			<h4> User Logged In: </h4>
			{user?.email}

			<button className="bg-blue-300" onClick={logout}>
				{" "}
				Sign Out{" "}
			</button>
			<button
				className="px-3 py-2 bg-red-600 text-white"
				onClick={handleLoginWithFirebase}
			>
				popup sigin
			</button>
		</div>
	);
};

export default Signin;
