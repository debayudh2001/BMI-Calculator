import React, { useMemo, useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value);
  }
  
  const value = useMemo(() => {
    const calcHgt = height/100;
    return (
      weight/(calcHgt * calcHgt)
    ).toFixed(1)
  },[weight,height]);

  return (
    <>
      <div className="flex flex-col items-center mt-10 w-[60vw] border-black border-[4px]">
        <div className="font-bold text-3xl text-center mb-5 p-2 bg-blue-800 w-full border-b-4 border-black">BMI CALCULATOR</div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="font-semibold">Weight: {weight} kg</p>
          <input type="range" step={1} min={40} max={200} onChange={handleWeight}></input>
          <p className="font-semibold">Height: {height} cm</p>
          <input type="range" step={1} min={140} max={220} onChange={handleHeight}></input>
          <div className="mb-5 font-semibold">Your BMI is:  {value}</div>
        </div>
      </div>
    </>
  )
};

export default App;


