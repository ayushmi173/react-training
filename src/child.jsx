import React from "react";

export const Child = ({ setCurrentDate }) => {
  const handleOnClick = () => {
    setCurrentDate(new Date().toLocaleTimeString());
  };

  return (
    <button onClick={handleOnClick}>
      Click Me for Passing the Child current Date
    </button>
  );
};
