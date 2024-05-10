import React, { useEffect, useState } from "react";
import WidthContext from "./WidthContext";
// pass to all the component to ensure the width
export default function WidthProvider({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);
  return <WidthContext value={screenWidth}>{children}</WidthContext>;
}
