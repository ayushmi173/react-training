// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

export const Input = () => {
  const inputElement = useRef();

  const focusInput = () => {
    console.log(inputElement);
    if (inputElement.current) {
      inputElement.current.focus();
      console.log(inputElement.current.value);
    }
  };

  return (
    <>
      <input id="myinput" type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
