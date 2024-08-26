import React, { useEffect, useState } from "react";

// const useTimer = () => {
//   const [timer, setTimer] = useState(() => new Date());

//   useEffect(() => {
//     const id = setInterval(() => {
//       setTimer(new Date());
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return timer;
// };

export const EventBubbling = (props) => {
  const [object, setObject] = useState({});
  const [counter, setCounter] = useState(0);
  // const time = useTimer();

  // useEffect(() => {
  //   setObject((prev) => ({
  //     ...prev,
  //     divFirst: "heyo",
  //   }));
  // }, [object["name"]]);

  console.log(object);

  const handleDivFirst = (event) => {
    setCounter((counter) => counter + 1);
    console.log("counteeerere", counter);

    setObject({
      ...object,
      handleDivFirst: "handleDivFirst",
    });
    console.log("handleDivFirst");
  };

  const handleDivSecond = (event) => {
    setObject({
      ...object,
      handleDivSecond: "handleDivSecond",
    });
    console.log("handleDivSecond");
  };

  const handleDivThird = (event) => {
    // event.stopPropagation();
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
        onClick={handleDivFirst}
      >
        <div
          className="center"
          onClick={(event) => handleDivSecond(event)}
          style={{
            position: "relative",
            border: "10px solid grey",
            width: "400px",
            height: "600px",
          }}
        >
          <div
            className="center"
            onClick={handleDivThird}
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
