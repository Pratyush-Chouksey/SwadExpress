import React from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const LoginPopUp = ({ setSignup }) => {
  const [regester, setRegester] = useState("Sign Up");

  return (
    <div className="login-popup">
      <div className="login-popup-form">
        <div className="login-popup-header">
          {regester}
          <img src={assets.cross_icon} alt="Close" onClick={() => setSignup(false)} />
        </div>

        <form action="">
          {regester === "Sign Up" && (
            <input type="text" placeholder="Enter your name" />
          )}
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <div className="terms">
            <input type="checkbox" required />
            <p>I agree to the Terms and Conditions</p>
          </div>
          <button >{regester}</button>
          {regester === "Sign Up" ? (
            <div className="toggle-auth">
              <p>Already have an account</p>
              <span onClick={() => setRegester("Log In")}>Log In</span>
            </div>
          ) : (
            <div className="toggle-auth">
              <p>Don't have an account</p>
              <span onClick={() => setRegester("Sign Up")}>Sign Up</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
