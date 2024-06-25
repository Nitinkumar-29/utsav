import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useFetcher, useLocation } from "react-router-dom";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location") || "all";
  });
  const urlLocation = useLocation();
  useEffect(() => {
    localStorage.setItem("location", location);
  }, [location]);

  return (
    <>
      <LocationContext.Provider value={{ location, setLocation }}>
        {children}
      </LocationContext.Provider>
    </>
  );
};
