import React, { useState } from 'react';
import { firebaseInitialize } from '../firebasee/firebase-initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

firebaseInitialize();

const GoogleLogin = () => {
    // logged in user info store
    const [user, setUser] = useState({});

    // all code for google signIn (its stored on firebase)------------------------------------
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(loggedInUser);
            })


            .catch((error) => {
                console.log(error);
            });
    }
    // sign out
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div onClick={handleGoogleSignIn}>
            <button>Google Login</button>
            <button onClick={handleSignOut}>google signOut</button>
            {
                user.name &&
                <div>
                    <h1>Welcome: {user.name}</h1>
                    <h1>email: {user.email}</h1>
                    <img src={user.photo} alt="" />
                </div>
            }
        </div>
    );
};

export default GoogleLogin;