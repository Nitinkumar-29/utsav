import React, { useContext, useEffect } from "react";
import { vendorsData } from "../vendorsData";
import { Link, useParams } from "react-router-dom";
import { LocationContext } from "../Context/Location_context/LocationContext";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const DisplayVendorsData = () => {
  const { location } = useContext(LocationContext);
  const { category, subCategory } = useParams();
  const vendorData =
    vendorsData[location]?.[category]?.[subCategory || "wedding-venues"] || [];

  return (
    <>
      <div className="shadow-inner shadow-slate-400 bg-gradient-to-tr from-red-100 to-blue-100 flex flex-col items-center justify-start min-h-screen w-full">
        <div className="w-[85%] mt-12 ">
          <span className="text-3xl font-semibold">
            {subCategory?.charAt(0).toUpperCase() + subCategory?.slice(1)}
          </span>
          <p className="flex items-end">
            Showing results{" "}
            <span className="px-1 font-medium mt-1">{vendorData.length}</span>{" "}
            as per your search criteria
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  my-6 h-full w-[85%]">
          {vendorData === undefined ? (
            <div>
              Data cannot be fetched in this category right at the moment.
              Please try again later.
            </div>
          ) : vendorData.length === 0 ? (
            <div>No data available for this category.</div>
          ) : (
            vendorData.map((venue) => (
              <Link
                to={`/vendors/${location}/${category}/all/${subCategory}/${venue.name.replace(
                  /\s+/g,
                  "-"
                )}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={venue.itemId}
              >
                <div
                  key={venue.itemId}
                  className="flex flex-col items-start w-full hover:scale-105 hover:shadow-2xl hover:bg-white shadow-slate-600 cursor-pointer rounded-md duration-200 p-2"
                >
                  <div className="flex items-center">
                    <img
                      className="rounded-lg h-[254px] w-[372px]"
                      src={`/vendorsDataImages/${venue.image}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full mt-1">
                    <div className="flex w-full justify-between">
                      <span className="text-sm font-semibold">
                        {venue.name}
                      </span>
                      <div className="flex space-x-1 items-center">
                        <FaStar color="orange" />
                        <span>{venue.rating}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <MdLocationOn></MdLocationOn>
                      <span>
                        {venue.location.charAt(0).toUpperCase() +
                          venue.location.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayVendorsData;
