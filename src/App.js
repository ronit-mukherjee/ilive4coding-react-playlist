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
    currentLoadedComponent: 1,
    tasks: [],
  };

  taskInputRef = React.createRef();

  handleAddTask(e) {
    e.preventDefault();

    if (this.taskInputRef.current && this.taskInputRef.current.value) {
      this.setState((state) => {
        return {
          tasks: [...state.tasks, this.taskInputRef.current.value],
        };
      });
    } else {
      alert("Add Task Name to Add");
    }
  }

  handleAddTask = this.handleAddTask.bind(this);

  componentDidUpdate() {
    this.taskInputRef.current.value = "";
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">React How to Loop Array in JSX</h1>
        <div className="form row justify-content-center mt-5">
          <div className="col-auto">
            <form className="form-inline" onSubmit={this.handleAddTask}>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  className="form-control"
                  ref={this.taskInputRef}
                  placeholder="Enter Task name To Do"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Add Task
              </button>
            </form>
          </div>
        </div>
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
              <ClassBased tasks={this.state.tasks} />
            )}
            {this.state.currentLoadedComponent === 2 && (
              <FunctionBased tasks={this.state.tasks} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
