import React from "react";
import "./Header.scss";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className="header-body">
      <div className="header-body-logo">
        <Logo />
        <div className="header-body-tagline">A HOME TO YOUR MEMORIES..</div>
      </div>
    </div>
  );
};

export default Header;
