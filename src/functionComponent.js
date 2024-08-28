import React, { Fragment, useEffect } from "react";

import { ClassComponent } from "./classComponent";

const sampleData = [
  {
    color: "red",
    id: "#f00",
  },
  {
    color: "green",
    id: "#0f0",
  },
  {
    color: "blue",
    id: "#00f",
  },
  {
    color: "cyan",
    id: "#0ff",
  },
  {
    color: "magenta",
    id: "#f0f",
  },
  {
    color: "yellow",
    id: "#ff0",
  },
  {
    color: "black",
    id: "#000",
  },
];

export const FunctionComponent = ({ name, age, number }) => {
  // console.log(props);

  // const MyCustomDiv = () => {
  //   return React.createElement("div", {}, <p>Paragraph looks beautiful from with div</p>);
  // };

  const elements = Array(4);

  return (
    <>
      {   (
        <div>
          {/* <ClassComponent/> */}
          {/* <MyCustomDiv /> */}
          {/* {sampleData.map((data) => {
        return <div>{data.color}</div>;
      })} */}

          <div>Hye there</div>
          <div>Hello, World! {name}</div>
          <div>My Age is {age}</div>
          <p>Paragraph looks</p>
        </div>
      )}
    </>
  );
};

export const Component = () => {
  return <>heyheyeyehyeey </>;
};
