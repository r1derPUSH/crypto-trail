import { FiChevronRight } from "react-icons/fi";
import "./AvatarSection.css";

function AvatarSection() {
  return (
    <div className="avatar-container">
      <img src="" alt="Avatar" />
      <span className="username">username</span>
      <FiChevronRight className="arrow-right-icon" />
    </div>
  );
}

export default AvatarSection;
