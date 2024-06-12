import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1, RxHamburgerMenu, RxPerson } from "react-icons/rx";
import toast from "react-hot-toast";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [displayType, setDisplayType] = useState("hidden");

  const handleToggleDisplayType = () => {
    setDisplayType((prev) => (prev === "hidden" ? "flex" : "hidden"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 4);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayType("flex");
      } else {
        setDisplayType("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast("User logged out!");
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      handleToggleDisplayType();
    }
    window.scrollTo(0, 0);
  };

  const textColorClass = scrolling ? "text-white" : "text-black";

  return (
    <>
      <nav
        className={`z-10 sticky top-0 navbar ${scrolling ? "scrolling" : ""} ${
          displayType === "hidden" ? "h-20" : "h-fit"
        } w-full`}
      >
        <div className="relative flex flex-col lg:flex-row justify-between w-[95%] mx-auto items-center h-full">
          {/* logo */}
          <div className="m-2 flex justify-between w-[100%] lg:w-fit">
            <Link to="/">
              <div className="relative animate-pulse rounded-full h-16 w-16 bg-gradient-to-r flex items-center justify-center from-red-400 to-blue-400">
                <span
                  style={{ fontFamily: "sans-serif" }}
                  className="absolute p-4 text-center font-bold  text-black"
                >
                  UTSAV
                </span>
              </div>
            </Link>
            <div
              onClick={handleToggleDisplayType}
              className="flex items-center lg:hidden cursor-pointer"
            >
              {displayType === "hidden" ? (
                <RxHamburgerMenu
                  className={scrolling ? "text-white" : "text-black"}
                  size={40}
                />
              ) : (
                <RxCross1
                  className={scrolling ? "text-white" : "text-black"}
                  size={35}
                />
              )}
            </div>
          </div>
          {/* navlinks */}
          <div
            className={`${
              displayType === "hidden" ? "hidden" : "flex"
            } flex-col lg:flex lg:flex-row h-full lg:h-10 items-start lg:items-center px-6 lg:px-0 mt-4 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto`}
          >
            <Link
              style={{ fontFamily: "sans-serif" }}
              className={`font-medium text-xl hover:text-red-600 ${
                location.pathname === "/" ? "text-red-600" : textColorClass
              }`}
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className={`font-medium text-xl hover:text-red-600 ${
                location.pathname === "/vendors"
                  ? "text-red-600"
                  : textColorClass
              }`}
              to="/vendors"
              onClick={handleLinkClick}
            >
              Vendors
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className={`font-medium text-xl hover:text-red-600 ${
                location.pathname === "/about" ? "text-red-600" : textColorClass
              }`}
              to="/about"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </div>
          {/* buttons */}
          <div
            className={`${
              displayType === "hidden" ? "hidden" : "flex"
            } flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 w-full lg:w-auto p-4`}
          >
            {!token ? (
              <div className="flex flex-col items-start space-y-4 lg:flex-row lg:space-y-0 lg:space-x-2">
                <Link
                  to="/logIn"
                  onClick={handleLinkClick}
                  style={{ fontFamily: "sans-serif" }}
                  className="bg-red-700 shadow-sm shadow-red-900 hover:bg-transparent hover:text-red-600 duration-300 ease-in-out font-medium text-white mx-2 px-6 py-2 rounded-md"
                >
                  LogIn
                </Link>
                <Link
                  to="/signUp"
                  onClick={handleLinkClick}
                  style={{ fontFamily: "sans-serif" }}
                  className="bg-red-700 shadow-sm shadow-red-900 hover:bg-transparent hover:text-red-600 duration-300 ease-in-out font-medium text-white mx-2 px-[1.125rem] py-2 rounded-md"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row items-start lg:justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                <Link
                  to="/userProfile/profile"
                  onClick={handleLinkClick}
                  className="cursor-pointer"
                >
                  <RxPerson color="#345566" size={35} />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-red-700 shadow-sm shadow-red-900 hover:bg-transparent hover:text-red-600 duration-300 ease-in-out font-medium text-white mx-2 px-4 py-2 rounded-md"
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
