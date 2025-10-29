import { FiChevronRight } from "react-icons/fi";
import "./AvatarSection.css";
import manExampleAvatar from "../img/manExaple.jpg";

function AvatarSection() {
  return (
    <div className="avatar-container">
      <img className="user-img" src={manExampleAvatar} alt="Avatar" />
      <span className="username">Serhii Donkov</span>
      <button className="button-arrow-right">
        <FiChevronRight className="arrow-right-icon" />
      </button>
    </div>
  );
}

export default AvatarSection;
