import React from "react";

function LoginSection() {
  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <img src="" alt="Login" />
          <span>Login</span>
        </div>
        <div className="login-fields">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="login-buttons">
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </div>
    </>
  );
}

export default LoginSection;
