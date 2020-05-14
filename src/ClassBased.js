import React from "react";

class ClassBasedComponent extends React.Component {
  onTaskClicked(taskId = null) {
    //console.log(taskId);
    if (taskId) {
      this.props.onToggleTask(taskId);
    }
  }

  renderTask(task = null, index = null) {
    if (task && index !== null) {
      return (
        <li
          key={task.id}
          className={`list-group-item ${
            task.isActive ? "" : "list-group-item-dark"
          }`}
          onClick={this.onTaskClicked.bind(this, task.id)}
        >
          {task.name}
        </li>
      );
    }
  }
  renderTask = this.renderTask.bind(this);

  renderAllTasks(tasks = []) {
    if (tasks.length > 0) {
      return tasks.slice().reverse().map(this.renderTask);
    }
    return null;
  }

  /* renderAllTasks(tasks = []) {
    const taskComponentsArr = [];

    tasks = tasks.reverse();
    for (let i = 0; i < tasks.length; i++) {
      taskComponentsArr.push(this.renderTask(tasks[i], i));
    }

    return taskComponentsArr;
  } */

  render() {
    return (
      <div className="container w-50 mt-5">
        {this.props.tasks.length > 0 && (
          <ul className="list-group">
            {this.renderAllTasks(this.props.tasks)}
          </ul>
        )}
        {this.props.tasks.length === 0 && (
          <p
            className="text-center text-uppercase font-weight-bolder text-secondary"
            style={{ fontSize: "24px" }}
          >
            No Tasks Added Yet. Add Tasks in Above Form
          </p>
        )}
      </div>
    );
  }
}

export default ClassBasedComponent;
