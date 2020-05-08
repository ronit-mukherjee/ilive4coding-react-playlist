/* import React, { useState } from "react";
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
}; */

import React from "react";
import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

class App extends React.PureComponent {
  state = {
    currentLoadedComponent: 0,
    userName: "",
  };

  handleAddName(name) {
    this.setState({ userName: name });
  }
  handleAddName = this.handleAddName.bind(this);

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          React How to Pass Data from Child to Parent
        </h1>
        {this.state.userName && (
          <h2 className="text-center text-primary">
            Hello, {this.state.userName}
          </h2>
        )}
        <div className="row justify-content-center mt-5">
          <div className="col-auto">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className={`btn ${
                  this.state.currentLoadedComponent === 1
                    ? "btn-success"
                    : "btn-secondary"
                } `}
                onClick={() => this.setState({ currentLoadedComponent: 1 })}
              >
                Load Class Based Component
              </button>
              <button
                type="button"
                className={`btn ${
                  this.state.currentLoadedComponent === 2
                    ? "btn-success"
                    : "btn-secondary"
                } `}
                onClick={() => this.setState({ currentLoadedComponent: 2 })}
              >
                Load Functional Component
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.currentLoadedComponent === 1 && (
              <ClassBased onNameAdded={this.handleAddName} />
            )}
            {this.state.currentLoadedComponent === 2 && (
              <FunctionBased onNameAdded={this.handleAddName} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
