import React, { useState } from "react";
import logo from "../Images/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const[btnName,setbtnName]  = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
      </div>
      <div className="nav-items">
        <ul className="nav-Buttons">
          <li><Link to="/">Home</Link ></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName ==="Login" ? setbtnName ("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
