import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import type { LoginSectionProps } from "../../types/loginSectionProps";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { EMAIL_REGEX } from "../../constants/regax";
import { PASSWORD_REGEX } from "../../constants/regax";

function LoginSection({
  isRegistered,
  setIsRegistered,
  setLogin,
  setPassword,
}: LoginSectionProps) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const backToWallet = () => {
    navigate("/wallet-section");
  };

  /* OnChange events */

  const handleChangeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  /* buttons signIn/signUp */

  const signInFunction = () => {};

  const forgotPasswordFunction = () => {};

  const signUpFunction = () => {
    if (!EMAIL_REGEX.test(emailValue)) {
      alert("Invalid email format");
      return;
    }
    if (!PASSWORD_REGEX.test(passwordValue)) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }

    setLogin(emailValue);
    setPassword(passwordValue);
    setIsRegistered(true);
  };

  /* Log Out FN */

  const logOut = () => {
    setIsRegistered(false);
  };

  return (
    <div className="login-parent-box">
      <div className="login-container">
        <div className="login-header">
          <img className="passlock-img" src={passlockImg} alt="Login" />
          <span>Login</span>
        </div>
        <div className="login-fields">
          <input
            value={emailValue}
            onChange={handleChangeEmailValue}
            type="email"
            placeholder="Email"
          />
          <div className="line"></div>
          <input
            value={passwordValue}
            onChange={handleChangePasswordValue}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="login-buttons">
          {isRegistered ? (
            <>
              <button onClick={signInFunction} className="signIn-button">
                Sign In
              </button>
              <button
                onClick={forgotPasswordFunction}
                className="recoverPassword-button"
              >
                Forgot Password?
              </button>
            </>
          ) : (
            <button onClick={signUpFunction} className="register-button">
              Register
            </button>
          )}
        </div>
        <div className="backToHome-section">
          <button onClick={backToHome} className="backToHome-button">
            Back To Home
          </button>
          <button onClick={backToWallet} className="backToWallet-button">
            Back To Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
