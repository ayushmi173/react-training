import React, { useEffect, useState } from "react";

export const EventBubbling = (props) => {
  const [object, setObject] = useState({});
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
    
  //   setObject((prev) => ({
  //     ...prev,
  //     divFirst: "heyo",
  //   }));
  // }, [object["name"]]);

  console.log(object);

  const handleDivFirst = (event) => {
    event.stopPropagation();

    setObject({
      ...object,
      handleDivFirst: "handleDivFirst",
    });
    console.log("handleDivFirst");
  };

  const handleDivSecond = (event) => {
    event.stopPropagation();

    setObject({
      ...object,
      handleDivSecond: "handleDivSecond",
    });
    console.log("handleDivSecond");
  };

  const handleDivThird = (event) => {
    event.stopPropagation();
    setObject({
      ...object,
      handleDivThird: "handleDivThird",
    });
    console.log("handleDivThird");
  };

  return (
    <>
      <div
        style={{ border: "10px solid red", width: "500px", height: "700px" }}
        onClickCapture={handleDivFirst}
      >
        <div
          className="center"
          onClickCapture={(event) => handleDivSecond(event)}
          style={{
            position: "relative",
            border: "10px solid grey",
            width: "400px",
            height: "600px",
          }}
        >
          <div
            className="center"
            onClickCapture={handleDivThird}
            style={{
              position: "relative",
              border: "10px solid green",
              width: "300px",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
      <div onClick={handleDivThird}>{counter}</div>
    </>
  );
};

export default EventBubbling;
