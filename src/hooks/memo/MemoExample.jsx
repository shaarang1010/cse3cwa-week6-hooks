import React, { useState, useMemo } from "react";

const computeMultipleOfNumber = (num) => {
  console.log("Computed");
  return Number(num * 420);
};

const MemoExample = () => {
  const [num, setNum] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const computeMulitple = useMemo(() => computeMultipleOfNumber(num), [num]);

  return (
    <>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => setCalculation(computeMulitple)}>
        Click to Compute
      </button>
      <h2> Value : {calculation}</h2>
    </>
  );
};

export default MemoExample;
