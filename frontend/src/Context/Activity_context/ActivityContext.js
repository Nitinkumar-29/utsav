import moment from "moment-timezone"; // Importing moment-timezone
import { createContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [savedItemsData, setSavedItemsData] = useState([]);
  const token = localStorage.getItem("token");
  // const host = "http://localhost:8000/api/activity";
  const host = "https://utsav-backend.vercel.app/api/activity"
  const [venue, setVenue] = useState(null);
  const inputRef = useRef(null);
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [fetchedUserReviewsData, setFetchedUserReviewsData] = useState([]);
  const [verifyUserData, setVerifyUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const userVerifiedToken =
    JSON.parse(localStorage.getItem("userVerifiedToken")) || null;
  const handleClear = () => {
    inputRef.current.value = "";
  };

  const saveItem = async (venueData) => {
    if (!token) {
      toast("Please login first");
      return;
    }
    try {
      const response = await fetch(`${host}/saveItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(venueData),
      });
      console.log(venueData);
      if (response.status === 409) {
        toast.custom("Item already saved by this user");
      }

      const data = await response.json();
      console.log(data);
      toast.success("shortlisted");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const getSavedItemsData = async () => {
    if (token) {
      try {
        const response = await fetch(`${host}/getSavedItems`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const sortedSavedData = data.sort((a, b) => {
          const aCreatedAt = moment(a.createdAt).tz("Asia/Kolkata");
          const bCreatedAt = moment(b.createdAt).tz("Asia/Kolkata");
          return bCreatedAt - aCreatedAt;
        });
        setSavedItemsData(sortedSavedData);
        console.log(sortedSavedData);
        console.log(data);
        console.log(
          "Activity API URL:",
          process.env.REACT_APP_ACTIVITY_API_URL
        );
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const saveReview = async () => {
    try {
      const response = await fetch(`${host}/saveReview`, {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewText, itemId: venue.itemId }),
      });
      if (!response.ok) {
        console.log(response);
        if (response.status === 400) {
          toast.error("You already have reviewed");
          handleClear();
        } else {
          toast.error("could not post review");
          handleClear();
        }
        return;
      }
      const data = await response.json();
      console.log(data);
      toast.success("Review Submitted!");
      handleClear();
      setReviewText("");
      getReviews();
    } catch (error) {
      console.error("Failed to process the request:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  // fetch all reviews
  const getReviews = async () => {
    try {
      const response = await fetch(`${host}/getAllReviews/${venue.itemId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setReviewsData(data);
      }
    } catch (error) {
      toast.error("Could not fetch reviews data right now");
    }
  };

  const removeItem = async (_id) => {
    if (token) {
      try {
        const response = await fetch(`${host}/removeItem/${_id}`, {
          method: "DELETE",
          headers: {
            "auth-token": token,
          },
        });
        if (!response.ok) {
          throw new Error("Can't process the request right now");
        }
        toast.success("Item removed successfully");
        setSavedItemsData(savedItemsData.filter((item) => item._id !== _id));
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  // verify userr data before booking
  const handleVerifyUserData = async () => {
    const { name, email, mobileNumber } = verifyUserData;
    const response = await fetch(`${host}/verifyUserBeforeBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobileNumber }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("userVerifiedToken", JSON.stringify(data));
    }
  };

  // fetch user placed orders
  const fetchUserPlacedOrders = async () => {
    try {
      const response = await fetch(`${host}/fetchPlacedOrdersData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      console.log(data);
      toast.success("Data fetched!");
    } catch (error) {
      console.error("Error fetching placed orders:", error);
      toast.error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchUserPlacedOrders();
    // eslint-disable-next-line
  }, [token]);

  const formatTime = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);

    const timeDifference = Math.floor((currentTime - postTime) / 1000); // in seconds

    if (timeDifference < 60) {
      return `${timeDifference} seconds ago`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      return new Date(timestamp).toLocaleDateString("en-US", options);
    }
  };

  return (
    <>
      <ActivityContext.Provider
        value={{
          getSavedItemsData,
          savedItemsData,
          saveItem,
          host,
          token,
          removeItem,
          venue,
          setVenue,
          getReviews,
          saveReview,
          handleClear,
          inputRef,
          reviewText,
          setReviewText,
          reviewsData,
          setReviewsData,
          fetchedUserReviewsData,
          // handleFetchAllReviews,
          formatTime,
          handleVerifyUserData,
          verifyUserData,
          setVerifyUserData,
          userVerifiedToken,
        }}
      >
        {children}
      </ActivityContext.Provider>
    </>
  );
};
