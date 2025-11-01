import React from "react";
import convertImg from "../imgs/icons8-convert-100.png";
import "./ConvertButton.css";

function ConvertButton() {
  return (
    <button className="send-btn-convert">
      <div className="img-holder-convert">
        <img className="img" src={convertImg} alt="invest" />
      </div>
      <span>Convert</span>
    </button>
  );
}

export default ConvertButton;
