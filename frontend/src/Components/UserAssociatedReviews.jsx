import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { ActivityContext } from "../Context/Activity_context/ActivityContext";
import { MdDelete } from "react-icons/md";

const UserAssociatedReviews = () => {
  const token = localStorage.getItem("token");
  const { host } = useContext(ActivityContext);
  const [fetchedUserReviewsData, setFetchedUserReviewsData] = useState([]);
  const { formatTime } = useContext(ActivityContext);

  // fetch all reviews associated with a userId
  const handleFetchAllReviews = async () => {
    if (!token) {
      toast.error("No authentication token found.");
      return;
    }

    try {
      const response = await fetch(`${host}/fetchAllReviews`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (!response.ok) {
        console.log("Response status:", response.status);
        console.log("Response message:", response.statusText);
        toast.error("Could not fetch all reviews right now");
        return;
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data)) {
        setFetchedUserReviewsData(data);
      } else {
        toast.error("Fetched data is not an array");
        console.log("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("An error occurred while fetching reviews.");
    }
  };

  useEffect(() => {
    handleFetchAllReviews();
    // eslint-disable-next-line
  }, [token]);

  //   handle delete particular review
  const handleDeleteReviewWithId = async (_id) => {
    if (!token) {
      toast.error("No authentication token found.");
      return;
    }

    try {
      const response = await fetch(`${host}/deleteReview/${_id}`, {
        method: "DELETE",
        headers: {
          "auth-token": token,
        },
      });

      if (!response.ok) {
        toast.error("Could not delete review");
        console.log("Response status:", response.status);
        console.log("Response message:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Delete response data:", data);
      // Fetch the updated reviews list after deletion
      handleFetchAllReviews();
      toast.success("Review deleted!");
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("An error occurred while deleting the review.");
    }
  };

  return (
    <div>
      <button
        className="text-red-700 font-semibold p-2 border-[1px] border-red-700 rounded-md"
        onClick={handleFetchAllReviews}
      >
        Total Reviews: {fetchedUserReviewsData.length}
      </button>
      <div className="flex flex-col">
        {Array.isArray(fetchedUserReviewsData) &&
        fetchedUserReviewsData.length > 0 ? (
          fetchedUserReviewsData.map((userReviews) => (
            <div key={userReviews._id} className="w-full">
              <div className="flex flex-col w-full lg:w-2/3 py-2 px-4 mt-4 space-y-1  shadow-sm bg-red-50 shadow-red-200 rounded-md">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <FaUser size={20}></FaUser>
                    <span className="font-semibold text-red-700">
                      {userReviews.userId.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteReviewWithId(userReviews._id)}
                  >
                    <MdDelete color="#cb000f" />
                  </button>
                </div>
                <div className="font-normal text-sm tracking-tight">
                  {userReviews.reviewText}
                </div>
                <span className="text-sm pt-2 text-red-600">
                  {formatTime(userReviews.createdAt)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-4">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default UserAssociatedReviews;
