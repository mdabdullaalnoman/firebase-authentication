import React from 'react';
import './Form.css';
import dumyImg from '../image/dummy-user.png';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const Form = () => {
    return (
        <div className="form-warp">
            <div className="form-container">
                <div className="log-in-head">
                    <img src={dumyImg} />
                    <h1>Sign Up</h1>
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
                    <div className="fullName">
                        <label htmlFor="fullName">Full Name</label><br />
                        <input type="text" name="fullName" id="fullName" placeholder="fullName" placeholder="full-name" />
                    </div>

                    <div className="register-reset">
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Already registered ?</label>
                        </div>
                        <a href="#dd">reset password</a>
                    </div>
                    <div className="submit-button">
                        <button type="submit">sign Up</button>
                    </div>
                </form>

                <div className="icons">
                    <FaGoogle className="google-icon" />
                    <FaFacebook className="facebook-icon" />
                    <FaGithub className="github-icon" />
                    <FaTwitter className="twitter-icon" />
                </div>
            </div>
        </div>
    );
};

export default Form;