import React, { memo, useState, useEffect } from "react";

let FunctionBasedCounter = ({ startsAt = 1 }) => {
  const [counter, setCounter] = useState(startsAt);

  /* useEffect(() => {
    setInterval(() => {
      setCounter((counter) => parseInt(counter) + 1);
    }, 1000);
  }, [startsAt]); */

  useEffect(() => {
    if (counter !== startsAt) {
      setCounter(startsAt);
    }

    const intervalId = setInterval(() => {
      setCounter((counter) => parseInt(counter) + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startsAt]);

  return (
    <div className="mt-5">
      <h2 className="text-center">Function Based Counter</h2>
      <h3 className="text-center">Counter Starts From {startsAt}</h3>
      <p
        className="text-center text-info"
        style={{ fontSize: 150, fontWeight: 300 }}
      >
        {counter}
      </p>
    </div>
  );
};

FunctionBasedCounter = memo(FunctionBasedCounter);

export default FunctionBasedCounter;
