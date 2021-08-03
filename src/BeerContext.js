import React, { createContext, useState } from "react";

export const BeerContext = createContext();

export const BeerProvider = ({ children }) => {
  const [beerName, setBeerName] = useState("");

  return (
    <BeerContext.Provider value={{ beerName, setBeerName }}>
      {children}
    </BeerContext.Provider>
  );
};
