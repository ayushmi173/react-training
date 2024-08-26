import React, { memo } from "react";

// const Component = ({ value }) => {
//   console.log("Memoized value is: ", value);
//   return <div>memoized value is: {value}</div>;
// };

// export const MemoizedComponent = memo(Component);

const Component = ({ value }) => {
  console.log("Memoized value is: ", value);
  return <div>memoized value is: {value}</div>;
};

export const MemoizedComponent = memo(Component);
