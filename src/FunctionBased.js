import React, { memo } from "react";

/* const renderAllTasks = (tasks = []) => {
  if (tasks.length > 0) {
    return tasks.slice().reverse().map(renderTask);
  }
  return null;
}; */

const renderAllTasks = (tasks = []) => {
  const taskComponentsArr = [];

  tasks = tasks.slice().reverse();
  for (let i = 0; i < tasks.length; i++) {
    taskComponentsArr.push(renderTask(tasks[i], i));
  }

  return taskComponentsArr;
};

const renderTask = (task = null, index = null) => {
  if (task && index !== null) {
    return (
      <li
        key={index}
        className={`list-group-item ${index === 0 ? "active" : ""}`}
      >
        {task}
      </li>
    );
  }
};

const FunctionBasedComponent = (props) => {
  return (
    <div className="container w-50 mt-5">
      <ul className="list-group">{renderAllTasks(props.tasks)}</ul>
    </div>
  );
};

export default memo(FunctionBasedComponent);
