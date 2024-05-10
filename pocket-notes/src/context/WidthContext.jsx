import { createContext, useContext } from "react";

// It is generally created to pass data and values across our app
const widthContext = createContext("");

export default widthContext.Provider;

export function useWidth() {
  return useContext(widthContext);
}
