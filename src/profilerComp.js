import React, { Profiler, useState } from "react";

export const ProfilerComp = () => {
    const [value, setValue] =  useState("");
    
  const callback = (
    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions,
    ...rest
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      startTime,
      baseDuration,
      commitTime,
      interactions,
      rest,
    });
  };

  return (
    <Profiler id="Name" onRender={callback}>
      <input value={value} onChange={(event)=> setValue(event.target.value)}/>
    </Profiler>
  );
};
