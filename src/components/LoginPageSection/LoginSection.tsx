import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import type { LoginSectionProps } from "../../types/loginSectionProps";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { EMAIL_REGEX } from "../../constants/regax";
import { PASSWORD_REGEX } from "../../constants/regax";
import type { FloatingError } from "../../types/floatinError";

function LoginSection({
  isRegistered,
  setIsRegistered,
  setLogin,
  setPassword,
}: LoginSectionProps) {
  /* states for buttons */
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  /* useStates for input validation */

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  /* state for errors */

  const [floatingErrors, setFloatingErrors] = useState<FloatingError[]>([]);

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
    if (emailError) setEmailError(null);
  };

  const handleChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    if (passwordError) setPasswordError(null);
  };

  /* buttons signIn/signUp */

  /* helper fn */

  const showFloatingError = (message: string) => {
    const positions: FloatingError["position"][] = ["left", "right", "bottom"];

    const newError: FloatingError = {
      id: Date.now(),
      message,
      position: positions[Math.floor(Math.random() * positions.length)],
    };

    setFloatingErrors((prev) => [...prev, newError]);

    setTimeout(() => {
      setFloatingErrors((prev) => prev.filter((err) => err.id !== newError.id));
    }, 3000);
  };

  const signInFunction = () => {};

  const forgotPasswordFunction = () => {};

  const signUpFunction = () => {
    let isValid = true;

    if (!EMAIL_REGEX.test(emailValue)) {
      showFloatingError("Invalid email format");
      isValid = false;
    }

    if (!PASSWORD_REGEX.test(passwordValue)) {
      showFloatingError(
        "Password must be at least 8 characters and contain a letter and a number"
      );
      isValid = false;
    }

    if (!isValid) return;

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
            className={emailError ? "input-error" : ""}
          />
          {emailError && <span className="error-text">{emailError}</span>}

          <div className="line"></div>

          <div className="password-input-wrapper">
            <input
              value={passwordValue}
              onChange={handleChangePasswordValue}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={passwordError ? "input-error" : ""}
            />

            <button
              type="button"
              className="password-eye-btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {passwordError && <span className="error-text">{passwordError}</span>}
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
      <div className="floating-error-container">
        {floatingErrors.map((error) => (
          <div
            key={error.id}
            className={`floating-error floating-${error.position}`}
          >
            {error.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginSection;
