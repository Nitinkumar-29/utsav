import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../Context/Authentication_context/AuthContext";

const UserDetails = () => {
  const { userData, getUserData, token, host } = useContext(AuthContext);
  const [editUserData, setEditUserData] = useState(true);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
  });

  const handleEditUserData = (e) => {
    e.preventDefault();
    if (!editUserData) {
      setEditUserData(true);
      toast("Editing is disabled");
      console.log(editUserData);
    } else {
      setEditUserData(false);
      toast("Editing is enabled!");
      console.log(editUserData);
    }
  };

  const onChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };


  const handleUpdateUserData = async () => {
    try {
      const response = await fetch(`${host}/updateUserData`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(updatedUserData),
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      toast.success("User data successfully updated");
      getUserData();
      setEditUserData(true);
    } catch (error) {
      toast.error("Failed to update user data");
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="min-h-[84vh] w-full">
      {userData.map((user) => (
        <div key={user._id} className="my-2 p-2 rounded-md h-full w-full">
          <div className="flex items-center w-full justify-between text-xl lg:text-3xl font-semibold">
            <span className="flex items-center">
              <h2 className="underline decoration-red-600 underline-offset-2  ">
                Personal Information
              </h2>
              &gt;
            </span>
            <FaUserEdit
              onClick={handleEditUserData}
              className="cursor-pointer"
              size={25}
              style={{ color: "#dc2626" }}
            />
          </div>
          <div className="grid row-auto w-full gap-5 mt-6 grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-start w-full">
              <label
                htmlFor="name"
                className={`w-fit text-lg font-medium ${
                  !editUserData ? "cursor-pointer" : "cursor-default"
                }`}
              >
                Name:
              </label>{" "}
              {editUserData ? (
                <span className="border-[1px] border-black bg-transparent font-sans text-black px-4 text-base rounded-md py-2">
                  {user.name}
                </span>
              ) : (
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={updatedUserData.name}
                  onChange={onChange}
                  className="border-[1px] border-black bg-transparent text-black focus:outline-red-600 px-4 text-base rounded-md shadow-md shadow-blue-200 py-2"
                />
              )}
            </div>
            <div className="flex flex-col justify-start w-full">
              <label
                htmlFor="email"
                className={`w-fit text-lg font-medium ${
                  !editUserData ? "cursor-pointer" : "cursor-default"
                }`}
              >
                Email:{" "}
              </label>
              {editUserData ? (
                <span className="border-[1px] border-black bg-transparent font-sans text-black px-4 text-base rounded-md py-2">
                  {user.email}
                </span>
              ) : (
                <input
                  type="email"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  value={updatedUserData.email}
                  onChange={onChange}
                  className="border-[1px] border-black bg-transparent text-black focus:outline-red-600 px-4 text-base rounded-md shadow-md shadow-blue-200 py-2"
                />
              )}
            </div>
            <div className="flex flex-col justify-start w-full">
              <label
                htmlFor="mobileNumber"
                className={`w-fit text-lg font-medium ${
                  !editUserData ? "cursor-pointer" : "cursor-default"
                }`}
              >
                Mobile Number:{" "}
              </label>
              {editUserData ? (
                <span className="border-[1px] border-black bg-transparent font-sans text-black px-4 text-base rounded-md py-2">
                  {user.mobileNumber}
                </span>
              ) : (
                <input
                  type="phone"
                  placeholder="Mobile number"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={updatedUserData.mobileNumber}
                  onChange={onChange}
                  className="border-[1px] border-black bg-transparent text-black focus:outline-red-600 px-4 text-base rounded-md shadow-md shadow-blue-200 py-2"
                />
              )}
            </div>
            <div className="flex flex-col justify-start w-full">
              <label
                htmlFor="address"
                className={`w-fit text-lg font-medium ${
                  !editUserData ? "cursor-pointer" : "cursor-default"
                }`}
              >
                Address:{" "}
              </label>
              {editUserData ? (
                <span className="border-[1px] border-black bg-transparent font-sans text-black px-4 text-base rounded-md py-2">
                  {user.address}
                </span>
              ) : (
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                  value={updatedUserData.address}
                  onChange={onChange}
                  className="border-[1px] border-black bg-transparent text-black focus:outline-red-600 px-4 text-base rounded-md shadow-md shadow-blue-200 py-2"
                />
              )}
            </div>
          </div>
          {/* Add more user details as needed */}
          {!editUserData && (
            <div className="flex justify-end mt-20 w-[100%]">
              <button
                onClick={() => {
                  setEditUserData(true);
                }}
                className="flex px-4 py-2 shadow-sm shadow-red-900 text-white bg-red-700 rounded-md mx-2 font-medium"
              >
                Cancel
              </button>
              {
                <button
                  onClick={handleUpdateUserData}
                  className="flex px-4 py-2 shadow-sm shadow-red-900 text-white bg-red-700 rounded-md mx-2 font-medium"
                >
                  Submit
                </button>
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default UserDetails;
