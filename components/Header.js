import React, { useContext, useState } from "react";
import logo from "../Images/logo/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gray-500 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-20 w-20 rounded-full" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-white">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-white">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <li>
            <Link to="/cart" className="px-4 font-bold">
              {loggedInUser}
            </Link>
          </li>

          {/* Login/Logout Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-200"
            onClick={() => {
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
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
