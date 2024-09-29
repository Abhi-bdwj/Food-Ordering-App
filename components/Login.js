import react, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setUserName, setLgnBtn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setUserName(email);
      setLgnBtn("X");

      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="p-2 rounded-lg  max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4 flex justify-center">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1>
            Don't have an account?
            {
              <a href="/signup" className="text-blue-500 hover:underline px-1">
                Sign Up
              </a>
            }
            here.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Login;
