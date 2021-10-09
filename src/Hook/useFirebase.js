import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut} from "firebase/auth";
import { firebaseInitialize } from "../firebasee/firebase-initialize"

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');
  const auth = getAuth();

  //Google sign in ----------------------------------------------------------------------
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setMessage('success');
      })

      .catch((error) => {
        setMessage(error.message);
      });
  }

 // git hub sign in -------------------------------------------------------------------
  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setMessage('success');
      })
      .catch(err => {
        setMessage(err.message);
      })
  }

  // signOut-----------------------------------------------------------------------------
  const handleSignOut = () => {
    signOut(auth)
    .then( () => {
      setUser({})
    })

    .catch(err => {
      message(err)
    })

  }

  // get current user---------------------------------------------------------------------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [])

  return {
    user,
    message,
    handleGithubSignIn,
    handleGoogleSignIn,
    handleSignOut
  }
}
export default useFirebase;