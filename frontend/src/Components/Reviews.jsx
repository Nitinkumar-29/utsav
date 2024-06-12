import React, { useContext, useState } from "react";
import { ActivityContext } from "../Context/Activity_context/ActivityContext";
import {
  FaArrowDown,
  FaChevronDown,
  FaChevronUp,
  FaUser,
} from "react-icons/fa";
import { MdArrowDownward, MdOutlineArrowDownward } from "react-icons/md";

const Reviews = () => {
  const { getReviews, reviewsData, formatTime } = useContext(ActivityContext);
  const [displayType, setDisplayType] = useState("hidden");

  const handleToggle = () => {
    getReviews();
    if (displayType === "hidden") {
      setDisplayType("flex");
    } else {
      setDisplayType("hidden");
    }
  };

  return (
    <div className="lg:h-[60vh] w-full">
      <div
        onClick={handleToggle}
        className="cursor-pointer flex items-center space-x-2 px-4 mt-12 mb-4"
      >
        <button className="text-xl font-semibold underline">Reviews</button>
        {displayType === "hidden" ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <div className={`${displayType} flex-col space-y-2 w-full`}>
        {reviewsData.map((review) => (
          <>
            <div key={review._id} className="w-full">
              <div className="w-[98%] lg:w-2/3 space-y-2 py-2 px-4 shadow-sm bg-red-50 shadow-red-200 rounded-md">
                <div className="flex space-x-2">
                  <FaUser size={20}></FaUser>
                  <span className="font-semibold text-red-700">
                    {review.userName}
                  </span>
                </div>
                <p className="font-thin tracking-tight">{review.reviewText}</p>
                <span className="pt-2 text-red-600">
                  {formatTime(review.createdAt)}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
