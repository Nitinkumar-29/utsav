import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import groomWear from "../images/groom-wear.webp";
import venues from "../images/venues.webp";
import photographer from "../images/photographers.webp";
import bridalWear from "../images/bridal-wear.webp";
import planningDecor from "../images/planning-decor.webp";
import mehendiArtist from "../images/mehendi-artists.webp";
import Location from "../Components/Location";
import { LocationContext } from "../Context/Location_context/LocationContext";

const Vendors = (props) => {
  const [isVisibleMap, setIsVisibleMap] = useState({});
  const { location } = useContext(LocationContext);

  const handleDropdown = (id) => {
    setIsVisibleMap((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };
  return (
    <>
      <div className="shadow-inner shadow-slate-400 flex flex-col items-center justify-start bg-gradient-to-tr from-red-100 to-blue-100 w-full min-h-screen">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 justify-between  mt-16 w-[85%] md:h-12">
          <div className="flex flex-row text-lg md:text-2xl lg:text-3xl justify-start h-fit items-center w-fit">
            <span className="underline underline-offset-8 decoration-red-600 font-semibold">
              Wedding Categories
            </span>
            &gt;
          </div>
          <Location />
        </div>
        {/* <Location/> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 grid-flow-row row-auto w-[85%] mt-4">
          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue1")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Venues</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="w-fit h-full">
                <img
                  src={venues}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue1"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-medium"
                    to={`/vendors/${location}/venues/all/wedding-venues`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    View All Venues
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/venues/all/banquet-halls`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Banquet Halls
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/venues/all/farmhouses`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Lawns / Farmhouses
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/venues/all/wedding-resorts`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Wedding Resorts
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/venues/all/party-halls`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Party Halls
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/venues/all/destination-wedding`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Destination Wedding
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>
          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue2")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Photographers</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="h-full">
                <img
                  src={photographer}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue2"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/photographers/all/wedding-photographers`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Photographers
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>

          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue4")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Planning & Decor</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="h-full">
                <img
                  src={planningDecor}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue4"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-normal"
                    to={`/vendors/${location}/planning-decor/all/wedding-planners`}
                  >
                    Wedding Planners
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/planning-decor/all/wedding-decorators`}
                  >
                    Decorators
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/planning-decoar/all/small-function-decor`}
                  >
                    Small Function Decor
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>
          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue5")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Bridal Wear</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="h-full">
                <img
                  src={bridalWear}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue5"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/bridal-wear/all/bridal-lehengas-store`}
                  >
                    Bridal Lehengas
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/bridal-wear/all/wedding-kanjeevaram-sarees-stores`}
                  >
                    Kanjeevaram / Silk Sarees
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/bridal-wear/all/wedding-cocktail-growns-stores`}
                  >
                    Cocktail Growns
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`vendors/${location}/bridal-wear/all/wedding-trousseasu-sarees-stores`}
                  >
                    Trousseasu Sarees
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/bridal-wear/all/wedding-rent-lehengas-stores`}
                  >
                    Bridal Lehengas on Rent
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>
          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue6")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Groom Wear</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="h-full">
                <img
                  src={groomWear}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue6"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-medium"
                    to={`/vendors/${location}/groom/all/groom-wears`}
                  >
                    View All Groom Wear
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/groom/all/sherwani`}
                  >
                    Sherwani
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/groom/all/suits`}
                  >
                    Wedding Suits / Tuxes
                  </Link>
                </span>
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/groom/all/sherwani on rent`}
                  >
                    Sherwani on Rent
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>
          <div className="w-full">
            <div
              onClick={() => handleDropdown("venue7")}
              className="flex justify-between cursor-pointer h-28 w-full shadow-lg shadow-red-200 rounded-md border-[1px] border-black"
            >
              <div className="flex items-center space-x-1 w-fit">
                <span className="font-semibold p-2">Mehendi</span>
                <IoIosArrowDown size={20} />
              </div>
              <div className="h-full">
                <img
                  src={mehendiArtist}
                  className="rounded-tl-[4rem] rounded-r-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            {isVisibleMap["venue7"] && (
              <div className="grid grid-cols-2 gap-3 w-full my-6 p-2">
                <span>
                  <Link
                    className="font-normal hover:text-red-600"
                    to={`/vendors/${location}/mehendi/all/mehendi-artists`}
                  >
                    Mehendi Artist
                  </Link>
                </span>
              </div>
            )}{" "}
          </div>
                  </div>
      </div>
    </>
  );
};

export default Vendors;
