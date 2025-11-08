import { FiChevronRight } from "react-icons/fi";
import "./AvatarSection.css";
<<<<<<< HEAD
import manExampleAvatar from "../img/manExaple.jpg";
=======
import manExample from "../img/man-example.jpg";
>>>>>>> feat/body-background

function AvatarSection() {
  return (
    <div className="avatar-container">
<<<<<<< HEAD
      <img className="user-img" src={manExampleAvatar} alt="Avatar" />
      <span className="username">Serhii Donkov</span>
      <button className="button-arrow-right">
        <FiChevronRight className="arrow-right-icon" />
      </button>
=======
      <img className="user-img" src={manExample} alt="Avatar" />
      <span className="username">username</span>
      <FiChevronRight className="arrow-right-icon" />
>>>>>>> feat/body-background
    </div>
  );
}

export default AvatarSection;
