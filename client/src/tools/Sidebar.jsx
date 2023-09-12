import React, { useState } from "react";
import "./Sidebar.css"; // Create a CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
