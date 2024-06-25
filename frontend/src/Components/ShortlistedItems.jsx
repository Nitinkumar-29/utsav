import React, { useContext, useEffect } from "react";
import { ActivityContext } from "../Context/Activity_context/ActivityContext";
import { RxCrossCircled } from "react-icons/rx";
import { MdLocationPin, MdStar } from "react-icons/md";
import { IoMdSad } from "react-icons/io";

const ShortlistedItems = () => {
  const { savedItemsData, getSavedItemsData, removeItem } =
    useContext(ActivityContext);
  const handleGetSavedItemsData = async () => {
    getSavedItemsData();
  };
  useEffect(() => {
    handleGetSavedItemsData();
    // eslint-disable-next-line
  }, []);
  const handleRemoveItem = async (_id) => {
    removeItem(_id);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-end w-full justify-between">
        <span className="my-4 text-lg lg:text-3xl font-medium underline-offset-8 underline decoration-red-600">
          Shortlisted Items
        </span>
        {savedItemsData && (
          <div className="flex w-fit items-center mb-4 space-x-2 border-[1px] border-red-700 text-red-700 rounded-md font-medium px-4 py-2">
            <span className="">Total: </span>
            <span className="">{savedItemsData?.length}</span>
          </div>
        )}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 row-auto w-full mx-auto pb-4">
        {savedItemsData?.length !== 0 ? (
          savedItemsData?.map((item) => {
            return (
              <div
                className="flex flex-col justify-center items-start rounded-md p-3 cursor-pointer bg-opacity-250 hover:bg-white hover:scale-105 duration-300 shadow-xl shadow-red-50 space-y-3"
                key={item._id}
              >
                <div className="relative w-fit h-fit">
                  <img
                    className="h-[200px] w-[320px] rounded-md"
                    src={`/vendorsDataImages/${item.image}`}
                    alt=""
                  />
                  <RxCrossCircled
                    onClick={() => {
                      handleRemoveItem(item._id);
                    }}
                    className="absolute bg-black  top-1 right-1 rounded-full"
                    color="white"
                    size={25}
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-sm">{item.name}</span>
                    <div className="flex items-center space-x-1">
                      <MdStar color="orange" /> <span>{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MdLocationPin />
                    <span>
                      {item.location?.charAt(0).toUpperCase() +
                        item.location?.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center w-full text-lg text-start">
            No data available right now{" "}
            <IoMdSad className="mx-2" color="red" size={25} />
          </div>
        )}
      </div>
    </>
  );
};

export default ShortlistedItems;
