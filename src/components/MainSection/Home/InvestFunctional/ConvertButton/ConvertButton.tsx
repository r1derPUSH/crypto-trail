import React from "react";
import convertImg from "../imgs/icons8-convert-100.png";
import "./ConvertButton.css";
import { useNavigate } from "react-router-dom";

function ConvertButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/convert-page-section");
  };

  return (
    <button className="send-btn-convert" onClick={handleNavigate}>
      <div className="img-holder-convert">
        <img className="img" src={convertImg} alt="invest" />
      </div>
      <span>Convert</span>
    </button>
  );
}

export default ConvertButton;
