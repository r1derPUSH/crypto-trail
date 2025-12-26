import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import type { LoginSectionProps } from "../../types/loginSectionProps";
import { useState } from "react";

function LoginSection({ isAuthorized, setIsAuthorized }) {
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

  const handleChangeEmailValue = (e: any) => {
    if (!e.target.value.trim()) return;
    setEmailValue(e.target.value);
  };

  const handleChangePasswordValue = (e: any) => {
    if (!e.target.value.trim()) return;
    setPasswordValue(e.target.value);
  };

  /* buttons signIn/signUp */

  const signInFunction = () => {};

  const forgotPasswordFunction = () => {};

  const signUpFunction = () => {
    // тут потрібна перевірка твоя) на інпути через регулярку чи все норм по реєстрації + паролю

    setIsAuthorized(true);
  };

  /* Log Out FN */

  const logOut = () => {
    setIsAuthorized(false);
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
          {isAuthorized ? (
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
