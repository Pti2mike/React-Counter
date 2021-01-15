import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <FontAwesomeIcon icon="calculator" className="icon" />
      <h1>React Counter</h1>
    </header>
  );
}

export default Header;
