import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { RxActivityLog } from "react-icons/rx";

const UserProfile = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex items-start justify-between w-full min-h-screen bg-gradient-to-tr from-red-100 to-blue-100 shadow-inner shadow-slate-400">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex md:flex-col justify-around md:justify-start space-x-3 sm:space-x-6 md:space-x-0 items-center lg:w-[25%] p-4 border-b-2 md:border-r-2 border-slate-300 lg:min-h-screen">
            <Link
              to="/userProfile/profile"
              className={`font-medium ${
                location.pathname === "/userProfile/profile"
                  ? "bg-white"
                  : "bg-red-700"
              } ${
                location.pathname === "/userProfile/profile"
                  ? "text-red-600"
                  : "text-white"
              } hover:text-red-600 ${
                location.pathname === "/userProfile/profile"
                  ? "hover:bg-white"
                  : "hover:bg-transparent"
              } duration-300 cursor-pointer text-sm xl:text-lg font-sans space-x-1 flex items-center lg:mx-2 px-2 my-2 w-full justify-start h-12 shadow-sm shadow-red-900 rounded-md`}
            >
              <ImProfile size={20} />
              <span className="flex">Profile</span>
            </Link>

            <Link
              to="/userProfile/activity"
              className={`font-medium bg-red-700 ${
                location.pathname === "/userProfile/activity"
                  ? "bg-white"
                  : "bg-red-700"
              } ${
                location.pathname === "/userProfile/activity"
                  ? "text-red-600"
                  : "text-white"
              } hover:text-red-600 ${
                location.pathname === "/userProfile/activity"
                  ? "hover:bg-white"
                  : "hover:bg-transparent"
              } duration-300 cursor-pointer text-sm xl:text-lg font-sans space-x-1 flex items-center lg:mx-2 px-2 my-2 w-full justify-start h-12 shadow-sm shadow-red-900 rounded-md`}
            >
              <RxActivityLog size={20} />
              <span className="flex">Activity</span>
            </Link>
            
          </div>
          <div className="flex items-center justify-between w-full h-full p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
