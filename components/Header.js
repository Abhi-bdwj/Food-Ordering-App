import React, { useContext, useState, useEffect } from "react";
import logo from "../Images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName, lgn, setLgnBtn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleAuthButton = () => {
    if (loggedInUser) {
      setLgnBtn("");
      // Log out the user
      setUserName(""); // Clear the logged-in user
    } else {
      // Redirect to login page

      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between items-center py-4 px-8 text-blue-300 bg-gray-900 shadow-lg">
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
              <div className="relative inline-flex items-center">
                <ShoppingCartIcon className="h-8 w-8 text-blue-300" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li>
            {loggedInUser && (
              <li>
                <Link to={"/userAccount"}>
                  <span className="px-4 font-bold">
                    {loggedInUser}
                  </span>
                </Link>
              </li>
            )}
          </li>

          {/* Login/Logout Button */}
          {!lgn ? (<button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-200"
            onClick={handleAuthButton} 
          >
            Login
          </button>):null}
        </ul>
      </div>
    </div>
  );
};

export default Header;
