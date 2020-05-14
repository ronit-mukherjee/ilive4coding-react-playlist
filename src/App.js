import React from "react";
import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

const uniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

class App extends React.Component {
  state = {
    currentLoadedComponent: 1,
    tasks: [],
  };

  taskInputRef = React.createRef();

  handleAddTask(e) {
    e.preventDefault();

    if (this.taskInputRef.current && this.taskInputRef.current.value) {
      this.setState((state) => {
        const taskObj = {
          id: uniqueId(),
          name: this.taskInputRef.current.value,
          isActive: true,
        };

        return {
          tasks: [...state.tasks, taskObj],
        };
      });
    } else {
      alert("Add Task Name to Add");
    }
  }

  handleAddTask = this.handleAddTask.bind(this);

  toggleTaskMode = (taskId = null) => {
    if (taskId) {
      this.setState((state) => {
        const tasksArr = state.tasks;

        for (let i = 0; i < tasksArr.length; i++) {
          const task = tasksArr[i];
          if (task.id === taskId) {
            task.isActive = !task.isActive;
            break;
          }
        }

        return {
          tasks: tasksArr,
        };
      });
    }
  };

  componentDidUpdate() {
    this.taskInputRef.current.value = "";
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          React How to Pass Argument to Event Handler
        </h1>
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
              <ClassBased
                tasks={this.state.tasks}
                onToggleTask={this.toggleTaskMode}
              />
            )}
            {this.state.currentLoadedComponent === 2 && (
              <FunctionBased
                tasks={this.state.tasks}
                onToggleTask={this.toggleTaskMode}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
