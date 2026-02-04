import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* Header Titles */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">
          {isLoginMode ? " HR Login" : "HR Sign Up"}
        </h2>
      </div>

      {/* Tab Controls */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        <button
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            isLoginMode ? "bg-blue-500 text-white" : "bg-white  text-black hover:bg-gray-100"
          }`}
          onClick={() => setIsLoginMode(true)}
        >
          Login
        </button>
        <button
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            !isLoginMode ? "bg-blue-500 text-white" : "bg-white  text-black hover:bg-gray-100"
          }`}
          onClick={() => setIsLoginMode(false)}
        >
          Signup
        </button>
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        ></div>
      </div>

      {/* Form Section */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Signup-only Field */}
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
        )}

        {/* Shared Fields */}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
        />

        {/* Signup-only Field */}
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
        )}

       

        {/* Submit Button */}
        <button className="w-full p-3 bg-blue-500 text-white rounded-full 
             text-lg font-medium hover:bg-blue-600 transition">
          {isLoginMode ? "Login" : "Signup"}
        </button>

        {/* Switch Mode Link */}
        <p className="text-center text-gray-600">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginMode(!isLoginMode);
            }}
            className="text-blue-600 hover:underline"
          >
            {isLoginMode ? "Signup now" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;