import React, { lazy,Suspense } from "react";

export const LazyComponent = () => {
  const Parent = lazy(() => import("./parent"));

  return (
    <>
      <div>Lazy Loading</div>
      <Suspense fallback={<div>LOADING</div>}>
        <div>Now data is loaded</div>
        <Parent/>
      </Suspense>
    </>
  );
};
