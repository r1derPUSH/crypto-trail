import React from "react";
import "./SelectDropBox.css";

function SelectDropBox() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn"> ⚡ Select Currenct</button>
    </div>
  );
}

export default SelectDropBox;
