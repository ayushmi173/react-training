import React, { useCallback, useMemo, useState } from "react";
import { Child } from "./child";
import useCustomHooks from "./useCustomHooks";
import { MemoizedComponent } from "./memoizedComponent";
import { useLocation } from "react-router-dom";
import { withAuth } from "./hoc/getAuth";

const ParentReference = ({name, age}) => {
  const [currentDate, setCurrentDate] = useState();

  const data = useCustomHooks(
    "https://api.sampleapis.com/codingresources/codingResources"
  );

  console.log("dataaaa &&&&", data);

  const value = 10 * 10 + 10993545 + 43434;

  // const location = useLocation();
  // console.log("location", location)

  // const calculateMe = useCallback(() => {
  //   console.log("calculate me");
  //   return value;
  // }, [value]);

  // const memoizedValue = calculateMe();

  return (
    <>
      <div>
        Parent Component is getting date from child component {currentDate}
      </div>
      <MemoizedComponent value={value} />
      <Child setCurrentDate={setCurrentDate} />
    </>
  );
};

export const Parent = withAuth(ParentReference);
