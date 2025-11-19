import "./LoginSection.css";
import passlockImg from "./imgs/image-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function LoginSection() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const backToWallet = () => {
    navigate("/wallet-section");
  };

  return (
    <div className="login-parent-box">
      <div className="login-container">
        <div className="login-header">
          <img className="passlock-img" src={passlockImg} alt="Login" />
          <span>Login</span>
        </div>
        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <div className="line"></div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-buttons">
          <button className="signIn-button">Sign In</button>
          <button className="recoverPassword-button">Forgot Password?</button>
          <button className="register-button">Register</button>
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
