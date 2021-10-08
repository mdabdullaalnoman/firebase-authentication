import React, { useState } from 'react';
import { firebaseInitialize } from '../firebasee/firebase-initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signOut } from "firebase/auth";

firebaseInitialize();

const AllAuthentications = () => {
    // logged in user info store
    const [user, setUser] = useState({});
    const auth = getAuth();

    // all code for google signIn (its stored on firebase)------------------------------
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

    // GitHub authentications ------------------------------------------------
    const handleGitHubLogin = () => {
        const provider = new GithubAuthProvider();
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

    // handle facebook sign in --------------------------------------------------------------
    const handleFacebookLogin = () => {
        const provider = new FacebookAuthProvider();
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

    // sign out---------------------------------------------------------
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            })

            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            {
                !user.name ?
                    <div>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGitHubLogin}>github login</button>
                        <button onClick={handleFacebookLogin}>facebook signin</button>
                    </div>
                    :
                    <button onClick={handleSignOut}>google signOut</button>
            }

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

export default AllAuthentications;