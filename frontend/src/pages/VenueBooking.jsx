import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { vendorsData } from "../vendorsData";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export const VenueBooking = () => {
  const { name, category, subCategory, location } = useParams();
  const [venue, setVenue] = useState();
  const venueName = name.replace(/-/g, " ");
  const findVenue = () => {
    // Iterate over each location in vendorsData
    for (const location in vendorsData) {
      const venues = vendorsData[location][category]; // Access the  'category'
      // Iterate over each subCategory in the 'venues' object
      for (const subCategory in venues) {
        const venuesArray = venues[subCategory];
        // Find the venue with a name that matches the provided venueName
        const foundVenue = venuesArray.find(
          (v) => v.name.toLowerCase() === venueName.toLowerCase() // Ensure case-insensitive comparison
        );
        if (foundVenue) {
          setVenue(foundVenue);
          console.log(foundVenue);
          return;
        }
      }
    }
    // If no venue is found, set venue to null and log a message
    setVenue(null);
    console.log("Venue not found:", venueName);
  };

  useEffect(() => {
    findVenue();
    // eslint-disable-next-line
  }, [venueName]);

  const handleSubmitBookVenue = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <div className="flex items-center justify-center h-[89.5vh] shadow-inner shadow-gray-400 bg-gradient-to-tr from-red-100 to-blue-100 p-4 w-full">
        <div className="w-[98%] h-[98%] border-[1px] border-gray-400 p-4 rounded-md">
          <h3 className="my-3 text-2xl text-red-700 font-semibold w-full">
            Complete the venue booking process:
          </h3>
          <div className="flex space-x-2 h-full">
            <div className="flex flex-col lg:w-1/3 border-black border-2 h-[90%]">
              <span className="font-semibold text-lg  mt-2 mb-3">
                Venue Details
              </span>
              <img
                className="rounded-lg h-[254px] w-[372px]"
                src={`/vendorsDataImages/${venue?.image}`}
                alt=""
              />
              <div className="flex flex-col my-3 space-y-1 w-[372px]">
                <span className="font-medium">{venueName}</span>
                <div className="flex justify-between w-full">
                  <div className="flex items-end">
                    <MdLocationOn size={25} />
                    <span>
                      {venue?.location?.charAt(0).toUpperCase() +
                        venue?.location?.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar color="orange" />
                    <span>{venue?.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 border-2 border-black h-[90%]">
              <form
                className="w-full h-[90%] border-2 border-red-300"
                onSubmit={handleSubmitBookVenue}
              >
                <div className="m-3 font-semibold text-lg">
                  Fill up the form in order to book venue
                </div>
                <div className="flex flex-col space-y-2 w-[80%] mx-3 my-6">
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="phone"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                  />
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="phone"
                    name="pincode"
                    placeholder="PinCode"
                  />

                  <input
                    required
                    type="text"
                    name="eventTime"
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    placeholder="Event Time"
                  />
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="date"
                    placeholder="Event Date"
                    min={(() => {
                      const today = new Date();
                      today.setDate(today.getDate() + 1); // Add one day to today's date
                      return today.toISOString().split("T")[0]; // Set min attribute to tomorrow's date
                    })()}
                  />
                  <input
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    type="number"
                    placeholder="No. of guest"
                  />
                  <textarea
                    required
                    className="py-1 px-2 rounded-sm border-b-[1px] border-b-gray-600 focus:outline-none focus:placeholder:text-red-600"
                    name="address"
                    type="text"
                    placeholder="Address"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex py-2 px-4 justify-center font-semibold text-lg shadow-sm shadow-red-950 m-3 w-[80%] text-center bg-red-700 text-white"
                >
                  Pay token fee
                </button>
              </form>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 border-2 border-black h-[90%]"></div>
          </div>
        </div>
      </div> */}
      <div className="w-full h-[89vh] text-center mt-32 text-4xl">Under maintenance please wait for a while</div>
    </>
  );
};
