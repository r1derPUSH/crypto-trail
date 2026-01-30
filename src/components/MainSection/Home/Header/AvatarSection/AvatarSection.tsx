import "./AvatarSection.css";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AvatarSection() {
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    username: string;
    avatar: string;
  } | null>(null);

  const isOpen = false;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleNavigate = () => {
    navigate("/login-page-section");
  };

  return (
    <div className="avatar-container">
      <img className="user-img" src={user?.avatar} alt="User avatar" />

      <span className="username">{user?.username ?? "Guest"}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNavigate();
        }}
        className="button-arrow-right"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <FiChevronRight className="arrow-right-icon" />
      </button>
    </div>
  );
}

export default AvatarSection;
