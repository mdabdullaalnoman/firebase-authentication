import React, { useState } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
const provider = new GithubAuthProvider();


const GithubLogin = () => {
    const [user, setUser] = useState({});

    const handleGitHubLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const user = result.user;
                const { displayName, email, photoURL } = user;
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
    return (
        <div>
            <button onClick={handleGitHubLogin}>Github Login</button>
            {
                user.name &&
                <div>
                    <h1>Welcome: {user.name}</h1>
                     {
                         user.email && <h1>email: {user.email}</h1>
                     }
                    <img src={user.photo} alt="" />
                </div>
            }
        </div>
    );
};

export default GithubLogin;