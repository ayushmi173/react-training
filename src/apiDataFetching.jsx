// @ts-nocheck
import React, { useEffect, useState } from "react";
import { MemoizedComponent } from "./memoizedComponent";

export const ApiDataFetching = () => {
  const [data, setData] = useState([]);

  const value = 10;

  const fetchApiData = async () => {
    const response = await fetch(
      "https://api.sampleapis.com/codingresources/codingResources"
    );

    const json = await response.json();

    // setData(json);
  };

  
  return (
    <>
      <button onClick={fetchApiData}>Click me for loading the data</button>
      {data.length ? (
        data.map((item) => {
          return (
            <div style={{ margin: "20px" }}>
              <span style={{ color: "red", marginRight: "40px" }}>
                {item.id}.
              </span>
              <span>{item.description}</span>
            </div>
          );
        })
      ) : (
        <div>My data is not showing</div>
      )}

      {/* <MemoizedComponent value={value} /> */}
    </>
  );
};
