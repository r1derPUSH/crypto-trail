import { FiChevronRight } from "react-icons/fi";
import "./AvatarSection.css";
import manExample from "../img/man-example.jpg";

function AvatarSection() {
  return (
    <div className="avatar-container">
      <img className="user-img" src={manExample} alt="Avatar" />
      <span className="username">username</span>
      <FiChevronRight className="arrow-right-icon" />
    </div>
  );
}

export default AvatarSection;
