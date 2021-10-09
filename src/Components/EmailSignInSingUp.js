import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const EmailSignInSingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrorMessage] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    // onsubmit button click , this function will be called -----------------------------
    const handleRegister = (e) => {
        e.preventDefault();

        // if (password.length < 6) {
        //     setErrorMessage('Password should be at least 6 characters');
        //     return;
        // }
        // if (!/(?=.*[A-Z])(?=.*?[0-9])/.test(password)) {
        //     setErrorMessage('Password give one give latter and one numeric number');
        //     return;
        // }

        // isLogin ? processUser(email, password) : createNewUser(email, password);

        

    };

    //create a new user for register-------------------------------------------------------
    const createNewUser = (e) => {
        e.preventDefault();
        
        console.log('create user callled');
        createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setErrorMessage(' ');
                console.log(user);
            })

            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                console.log(errorMessage);
            })
    };

    // login old user-----------------------------------------------
    const processUser = (email, password) => {

        signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }

    // Email Verifications-------------------------------------------------------------- 
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }


    // reset Password -------------------------------------------------------------------
    const updatePassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           console.log(error);
          });
    }


    // get email filled and set in the state------------------------------------------
    const handleEmail = e => {
        setEmail(e.target.value);
    }


    // get password filled and set in the state----------------------------------------
    const handlePassword = e => {
        setPassword(e.target.value);
    }


    //toggle Login ---------------------------------------------------------------------
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    console.log(isLogin);
    console.log(email, password);
    return (
        <div className="container">
            <h1 className="text-center text-primary">{isLogin ? 'login' : 'register'}</h1>
            <form onSubmit={createNewUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">is registered ?</label>
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'login' : 'register'} </button>
            </form>

            <h2 className="text-danger">{errMessage}</h2>

            <br /><br /><br /><br />
        </div>
    );
};

export default EmailSignInSingUp;