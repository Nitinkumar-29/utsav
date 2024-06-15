import React, { useContext } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { AuthContext } from "../Context/Authentication_context/AuthContext";

const Login = () => {
  const {
    login,
    credentials,
    setCredentials,
    passwordType,
    handlePasswordType,
  } = useContext(AuthContext);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    login();
  };
  return (
    <>
      <div
        style={{ fontFamily: "sans-serif" }}
        className="flex justify-center items-center mx-auto w-full  bg-gradient-to-tr from-red-100 to-blue-100 h-[90vh]"
      >
        <div className="flex items-center flex-col h-fit w-full lg:w-1/2">
          <span className="font-semibold text-3xl">LogIn to Continue</span>
          <form
            onSubmit={handleLogIn}
            className="flex items-center justify-center my-10 w-full"
            method="post"
          >
            <div className="flex flex-col space-y-6 items-center justify-start h-[40vh] w-screen sm:w-5/6 md:w-2/3 lg:w-5/6">
              <div className="flex flex-col items-start justify-center w-[60%]">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full p-2 rounded-md focus:outline-none bg-transparent border-2 border-slate-600 shadow-md shadow-blue-200"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[60%]">
                <label htmlFor="password">Password:</label>
                <div className="relative flex items-center justify-between w-full">
                  <input
                    type={passwordType}
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    required
                    placeholder="Enter password"
                    className="w-full p-2 rounded-md focus:outline-none bg-transparent border-2 border-slate-600 shadow-md shadow-blue-200"
                  />
                  <FaEye
                    onClick={handlePasswordType}
                    className="cursor-pointer absolute right-2"
                  ></FaEye>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center space-x-12 py-2 rounded-md shadow-sm shadow-red-900 bg-red-700 text-white w-[60%] cursor-pointer"
              >
                Log In
                <FaArrowRight size={25} className="animate-pulse" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
