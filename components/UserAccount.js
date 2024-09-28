import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const { loggedInUser, setUserName, lgn, setLgnBtn } = useContext(UserContext);
  const navigate = useNavigate();

  // Dummy user data for display, can be fetched from context or backend
  const user = {
    firstName: "Abhishek",
    lastName: "Bhardwaj",
    email: loggedInUser || "user@example.com",
    profileImage: "https://via.placeholder.com/150", // Sample profile image link
  };

  const handleLogout = () => {
    // Clear user context and redirect to login
    setUserName("");
    setLgnBtn("");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Account Details
        </h1>
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6"
          />

          {/* First Name and Last Name */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value={user.firstName}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={user.lastName}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Email */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Password - for display purposes, it's set as asterisks */}
          <div className="w-full mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value="********"
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
