import React from "react";

/* const renderAllTasks = (tasks = []) => {
  if (tasks.length > 0) {
    return tasks.slice().reverse().map(renderTask);
  }
  return null;
}; */
let onToggleTask;
const onTaskClicked = (taskId) => {
  if (taskId) {
    onToggleTask(taskId);
  }
};

const renderTask = (task = null, index = null) => {
  if (task && index !== null) {
    return (
      <li
        key={task.id}
        className={`list-group-item ${
          task.isActive ? "" : "list-group-item-dark"
        }`}
        //onClick={() => onTaskClicked(task.id)}
        onClick={onTaskClicked.bind(null, task.id)}
      >
        {task.name}
      </li>
    );
  }
};

const renderAllTasks = (tasks = []) => {
  const taskComponentsArr = [];

  tasks = tasks.slice().reverse();
  for (let i = 0; i < tasks.length; i++) {
    taskComponentsArr.push(renderTask(tasks[i], i));
  }

  return taskComponentsArr;
};

const FunctionBasedComponent = (props) => {
  onToggleTask = props.onToggleTask;

  return (
    <div className="container w-50 mt-5">
      <ul className="list-group">{renderAllTasks(props.tasks)}</ul>
    </div>
  );
};

export default FunctionBasedComponent;
