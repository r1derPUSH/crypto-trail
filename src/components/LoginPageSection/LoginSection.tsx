import React from "react";
import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";

function LoginSection() {
  return (
    <div className="login-parent-box">
      <div className="login-container">
        <div className="login-header">
          <img src={passlockImg} alt="Login" />
          <span>Login</span>
        </div>
        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <div className="line"></div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-buttons">
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
