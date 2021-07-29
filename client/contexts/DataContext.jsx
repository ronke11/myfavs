/**
 * @description: creates our data state & uses context so data can be shared btw components
 */

import React, { useState, useEffect, createContext } from "react";

// create context to share with other components
export const DataContext = createContext();

const DataContextProvider = ({children}) => {
  // grab data
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};


// This context provider is passed to any component requiring the context
export default DataContextProvider

