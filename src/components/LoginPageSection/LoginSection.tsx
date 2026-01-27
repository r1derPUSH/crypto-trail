import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";
import type { LoginSectionProps } from "../../types/loginSectionProps";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regax";
import type { FloatingError } from "../../types/floatinError";

/* avatars */
import avatar1 from "../../avatars/avatar1.jpg";
import avatar2 from "../../avatars/avatar2.jpg";
import avatar3 from "../../avatars/avatar3.jpg";
import avatar4 from "../../avatars/avatar4.jpg";
import avatar5 from "../../avatars/avatar5.jpg";
import avatar6 from "../../avatars/avatar6.jpg";
import avatar7 from "../../avatars/avatar7.jpg";
import avatar8 from "../../avatars/avatar8.jpg";
import avatar9 from "../../avatars/avatar9.jpg";
import avatar10 from "../../avatars/avatar10.jpg";
import Footer from "../MainSection/Footer/Footer";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
];

function LoginSection({
  login,
  isRegistered,
  setIsRegistered,
  setLogin,
  registerDate,
  userAvatar,
  setRegisterDate,
  setUserAvatar,
}: LoginSectionProps) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [floatingErrors, setFloatingErrors] = useState<FloatingError[]>([]);

  // const navigate = useNavigate();

  /* helpers */

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

  /* handlers */

  const handleChangeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const signUpFunction = () => {
    let isValid = true;

    if (!EMAIL_REGEX.test(emailValue)) {
      showFloatingError("Invalid email format");
      isValid = false;
    } else {
      const [localPart] = emailValue.split("@");

      if (localPart.length < 3) {
        showFloatingError("Email name must be at least 3 characters");
        isValid = false;
      }
    }

    if (!PASSWORD_REGEX.test(passwordValue)) {
      showFloatingError(
        "Password must be at least 8 characters and contain a letter and a number",
      );
      isValid = false;
    }

    if (!isValid) return;

    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const username = emailValue.slice(0, emailValue.indexOf("@"));

    const registerDate = new Date().toLocaleDateString();

    const userData = {
      email: emailValue,
      username,
      avatar: randomAvatar,
      registerDate,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isSignedIn", "true");

    setLogin(username);
    setUserAvatar(randomAvatar);
    setRegisterDate(registerDate);
    setIsRegistered(true);
  };

  const logOut = () => {
    setIsRegistered(false);

    localStorage.removeItem("user");
    localStorage.removeItem("isSignedIn");

    setEmailValue("");
    setPasswordValue("");
    setUserAvatar(null);
    setRegisterDate(null);
  };
  return (
    <div className="login-parent-box">
      {!isRegistered ? (
        <div className="login-container">
          <div className="login-header">
            <img className="passlock-img" src={passlockImg} alt="Login" />
            <span>Login</span>
          </div>

          <div className="login-fields">
            <input
              className="login-input"
              value={emailValue}
              onChange={handleChangeEmailValue}
              type="email"
              placeholder="Email"
              maxLength={33}
            />

            <div className="line"></div>

            <div className="password-input-wrapper">
              <input
                className="password-input"
                value={passwordValue}
                onChange={handleChangePasswordValue}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                maxLength={20}
              />

              <button
                type="button"
                className="password-eye-btn"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="login-buttons">
            <button onClick={signUpFunction} className="register-button">
              Register
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-container-of-profile-box">
          <div className="profile-box">
            <img
              src={userAvatar ?? avatars[0]}
              alt="User avatar"
              className="profile-avatar"
            />
            <h3 className="profile-email">{login}</h3>

            <div className="profile-info">
              <span>
                <strong>Registered:</strong> {registerDate}
              </span>
              <span>
                <strong>Status:</strong> Active
              </span>
            </div>

            <button onClick={logOut} className="logout-button">
              Log out
            </button>
          </div>
        </div>
      )}

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
      {isRegistered && <Footer />}
    </div>
  );
}

export default LoginSection;
