import React from 'react';
import '../Components/CssFiles/Form.css';
import dumyImg from '../image/dummy-user.png';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import useFirebase from '../Hook/useFirebase';

const Login = () => {
    const { handleGoogleSignIn, handleGithubSignIn, message } = useFirebase();
    return (
        <div>
            <div className="form-warp">
                <div className="form-container">
                    <div className="log-in-head">
                        <img src={dumyImg} />
                        <h1>Login</h1>
                    </div>
                    <form>
                        <div className="email">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name="email" id="email" placeholder="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" name="password" id="password" placeholder="password" />
                        </div>
                        <div className="register-reset">
                            <div className="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Already registered ?</label>
                            </div>
                            <a href="#dd">forgot password</a>
                        </div>
                        <div className="submit-button">
                            <button type="submit">Login</button>
                        </div>
                    </form>

                    <p style={{ color: 'white', textAlign: 'center' }}>{message}</p>

                    <div className="icons">
                        <FaGoogle onClick={handleGoogleSignIn} className="google-icon" />
                        <FaFacebook className="facebook-icon" />
                        <FaGithub onClick={handleGithubSignIn} className="github-icon" />
                        <FaTwitter className="twitter-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;