import React, { useState } from "react";
import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

const App = () => {
  const [currentLoadedComponent, setCurrentLoadedComponent] = useState(0);

  return (
    <div className="container">
      <h1 className="text-center mt-5">React How to Fetch data from API</h1>
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
              Load Class Based Component
            </button>
            <button
              type="button"
              className={`btn ${
                currentLoadedComponent === 2 ? "btn-success" : "btn-secondary"
              } `}
              onClick={() => setCurrentLoadedComponent(2)}
            >
              Load Functional Component
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {currentLoadedComponent === 1 && <ClassBased />}
          {currentLoadedComponent === 2 && <FunctionBased />}
        </div>
      </div>
    </div>
  );
};

export default App;
