// test-utils.js
import React from "react";
import { useGlobal, GlobalContext } from "./context";

export const AllTheProviders = ({
  children,
  globalOverrides,
}: {
  children: any;
  globalOverrides: any;
}) => {
  const globalValues = useGlobal();
  return (
    <GlobalContext.Provider value={{ ...globalValues, ...globalOverrides }}>
      {children}
    </GlobalContext.Provider>
  );
};
