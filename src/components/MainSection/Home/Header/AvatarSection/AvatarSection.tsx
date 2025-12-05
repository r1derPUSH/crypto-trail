import "./AvatarSection.css";
import { FiChevronRight } from "react-icons/fi";
import manExampleAvatar from "../img/manExaple.jpg";
import { useNavigate } from "react-router-dom";

function AvatarSection() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login-page-section");
  };

  return (
    <div className="avatar-container">
      <img className="user-img" src={manExampleAvatar} alt="Avatar" />
      <span className="username">Serhii Donkov</span>
      <button onClick={handleNavigate} className="button-arrow-right">
        <FiChevronRight className="arrow-right-icon" />
      </button>
    </div>
  );
}

export default AvatarSection;
