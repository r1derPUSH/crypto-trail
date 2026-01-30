import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import "./AvatarSection.css";

function AvatarSection() {
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    username: string;
    avatar: string;
  } | null>(null);

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
    <div className="avatar-container" onClick={handleNavigate}>
      <img className="user-img" src={user?.avatar} alt="Avatar" />
      <span className="username">{user?.username || "username"}</span>
      <FiChevronRight className="arrow-right-icon" />
    </div>
  );
}

export default AvatarSection;
