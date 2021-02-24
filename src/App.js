import React, { useState, useRef } from "react";
import ClassBasedCounter from "./ClassBasedCounter";
import FunctionBasedCounter from "./FunctionBasedCounter";

const App = () => {
  const [currentLoadedComponent, setCurrentLoadedComponent] = useState(0);
  const [counterStartingPoint, setCounterStartingPoint] = useState(1);
  const counterSPIRef = useRef();

  return (
    <div className="container">
      <h1 className="text-center mt-5">Understanding useEffect() in Depth</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Set Counter Starting Point"
              aria-label="Set Counter Starting Point"
              ref={counterSPIRef}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  setCounterStartingPoint(counterSPIRef.current.value)
                }
              >
                Set Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={`btn ${
                currentLoadedComponent === 1 ? "btn-success" : "btn-secondary"
              } `}
              onClick={() => setCurrentLoadedComponent(1)}
            >
              Load Class Based Counter
            </button>
            <button
              type="button"
              className={`btn ${
                currentLoadedComponent === 2 ? "btn-success" : "btn-secondary"
              } `}
              onClick={() => setCurrentLoadedComponent(2)}
            >
              Load Functional Counter
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {currentLoadedComponent === 1 && (
            <ClassBasedCounter startsAt={counterStartingPoint} />
          )}
          {currentLoadedComponent === 2 && (
            <FunctionBasedCounter startsAt={counterStartingPoint} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
