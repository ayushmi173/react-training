import React, { useState } from "react";
import { createPortal } from "react-dom";

export const PortalDemo = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const data = [2, 2, 5, 5, 6, 6, 6];

  console.log("Data", data);

  return (
    <>
      {data.map((d, key) => {
        return (
          <div key={key}
            style={{
              backgroundColor: d % 2 === 0 ? "red" : "blue",
              width: "100px",
              height: "100px",
              margin: "10px",
            }}
          >
            {d}
          </div>
        );
      })}
      <div>
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Hover me
        </button>

        {showTooltip && (
          <Tooltip>
            <p>This is a tooltip</p>
          </Tooltip>
        )}
      </div>
    </>
  );
};

export function Tooltip({ children }) {
  // const domNode = document.getElementById("root")
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: "50px",
        left: "100px",
        background: "black",
        color: "white",
      }}
    >
      {children}
    </div>,
    document.body
  );
}
