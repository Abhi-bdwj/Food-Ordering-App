import React from "react";
import logo from "../Images/logo/logo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-Buttons">
          <button>Home</button>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Cart</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
