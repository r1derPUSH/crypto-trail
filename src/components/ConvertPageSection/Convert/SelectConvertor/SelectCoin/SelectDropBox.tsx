import React from "react";
import "./SelectDropBox.css";
import { useState } from "react";

function SelectDropBox() {
  const [open, setOpen] = useState(false);
  const coins = [
    { name: "BTC", price: 100940 },
    { name: "ETH", price: 3350 },
    { name: "ARB", price: 0.38 },
    { name: "FF", price: 0.17 },
  ];

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="dropdown-container">
        <button onClick={handleOpen} className="dropdown-btn">
          ⚡ Select Currenct
        </button>
      </div>

      {open && (
        <div className="dropdown-child">
          <input type="text" className="dropdown-input" />
          <ul>
            {coins.map((item) => (
              <li>
                {item.name}:{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SelectDropBox;
