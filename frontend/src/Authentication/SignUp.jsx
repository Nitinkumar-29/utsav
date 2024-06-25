import React, { useContext } from "react";
import { FaEye, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../Context/Authentication_context/AuthContext";

const SignUp = () => {
  const {
    createUserCredentials,
    setCreateUserCredentials,
    createUser,
    passwordType,
    handlePasswordType,
  } = useContext(AuthContext);

  const onChange = (e) => {
    setCreateUserCredentials({
      ...createUserCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <>
      <div
        style={{ fontFamily: "sans-serif" }}
        className="flex justify-center items-center mx-auto w-full  bg-gradient-to-tr from-red-100 to-blue-100 lg:h-[90vh]"
      >
        <div className="flex items-center flex-col h-fit mt-10  w-full lg:w-1/2">
          <span className="font-semibold text-3xl">Create Account</span>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col space-y-6 my-10 px-4 items-start w-full"
            method="post"
          >
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 w-full">
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="w-fit cursor-pointer" htmlFor="first name">
                  First Name:
                </label>
                <div className="flex justify-between w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm bg-transparent py-1 px-2"
                    type="name"
                    value={createUserCredentials.firstName}
                    onChange={onChange}
                    name="firstName"
                    required
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="w-fit cursor-pointer" htmlFor="last name">
                  Last Name:
                </label>
                <div className="flex justify-between w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm bg-transparent py-1 px-2"
                    type="name"
                    value={createUserCredentials.lastName}
                    onChange={onChange}
                    name="lastName"
                    required
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 w-full">
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="w-fit cursor-pointer" htmlFor="mobile number">
                  Mobile Number:
                </label>
                <div className="flex justify-between w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm bg-transparent py-1 px-2"
                    type="phone"
                    value={createUserCredentials.mobileNumber}
                    onChange={onChange}
                    name="mobileNumber"
                    minLength={10}
                    maxLength={10}
                    required
                    placeholder="Mobile number"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="w-fit cursor-pointer" htmlFor="email">
                  Email Address:
                </label>
                <div className="flex justify-between w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm bg-transparent py-1 px-2"
                    type="email"
                    value={createUserCredentials.email}
                    onChange={onChange}
                    name="email"
                    required
                    placeholder="Email address"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 w-full">
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="w-fit cursor-pointer" htmlFor="setPassword">
                  Set Password
                </label>
                <div className="relative flex justify-between items-center w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm  bg-transparent py-1 px-2"
                    type={passwordType}
                    value={createUserCredentials.password}
                    onChange={onChange}
                    name="password"
                    required
                    placeholder="Should contain atleast 8 characters"
                  />
                  <span className="absolute right-2 px-2">
                    <FaEye
                      className="cursor-pointer"
                      onClick={handlePasswordType}
                    ></FaEye>
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  className="w-fit cursor-pointer"
                  htmlFor="confirmPassword"
                >
                  Confirm Password:
                </label>
                <div className="flex justify-between w-full focus:shadow-red-200 border-2 border-slate-600 shadow-md shadow-blue-200 rounded-md">
                  <input
                    className="w-full text-lg focus:outline-none placeholder:text-sm  bg-transparent py-1 px-2"
                    type="password"
                    value={createUserCredentials.confirmPassword}
                    onChange={onChange}
                    name="confirmPassword"
                    required
                    placeholder="Password must be same"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full ">
              <label className="w-fit cursor-pointer" htmlFor="address">
                Address:
              </label>
              <input
                type="text"
                value={createUserCredentials.address}
                onChange={onChange}
                name="address"
                required
                cols="30"
                rows="10"
                placeholder="Write your address "
                className="placeholder:text-sm focus:outline-none shadow-md shadow-blue-200 border-2 border-slate-600 rounded-md w-full px-4 py-2 bg-transparent"
              ></input>
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="flex items-center justify-between shadow-sm shadow-red-900 px-4 py-3 bg-red-700 text-white rounded-md font-medium lg:w-1/3"
              >
                Create Account
                <FaArrowRight
                  size={20}
                  className="animate-pulse"
                ></FaArrowRight>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
