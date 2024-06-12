import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";
import { ActivityContext } from "../Context/Activity_context/ActivityContext";

const WriteReview = () => {
  const {
    venue,
    saveReview,
    token,
    setReviewText,
    reviewText,
    inputRef,
    handleClear,
  } = useContext(ActivityContext);

  const onChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSaveReview = async (e) => {
    e.preventDefault();
    if (token) {
      saveReview();
    } else {
      toast("Please login first");
    }
  };
  return (
    <>
      <div className="flex flex-col space-y-3 shadow-md shadow-red-200 rounded-sm p-4 w-[98%] lg:w-2/3">
        {/* write review */}
        <div className="flex items-center space-x-1">
          <span className="text-lg">Write a Review</span>
          <FaPencilAlt></FaPencilAlt>
        </div>
        <form onSubmit={handleSaveReview} className="flex flex-col space-y-3">
          {/* review content */}
          <textarea
            ref={inputRef}
            name="reviewContent"
            onChange={onChange}
            className="w-full rounded-sm p-2 focus:outline-red-200"
            placeholder="Type here"
            value={reviewText}
          ></textarea>
          {/* buttons */}
          <div className="flex space-x-2 w-full justify-end">
            <button
              type="button"
              onClick={handleClear}
              className="font-medium shadow-sm  shadow-red-900 px-4 py-2 bg-red-600 hover:bg-red-700 duration-300 text-white rounded-md"
            >
              Clear
            </button>
            <button
              type="submit"
              className="font-medium shadow-sm  shadow-red-900 px-4 py-2 bg-red-600 hover:bg-red-700 duration-300 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteReview;
