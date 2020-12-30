import React from "react";
import "./Task.css";

const Task = ({ task, removeTask, idx, toggleCompletion }) => {
  let completionStatusText, taskItemClasses;
  if (task.completed) {
    completionStatusText = "DONE";
    taskItemClasses = "task__item task__item--completed";
  } else {
    completionStatusText = "ACTIVE";
    taskItemClasses = "task__item";
  }

  return (
    <li className={taskItemClasses}>
      <span className="task__item__content">{task.name}</span>
      <span className="task__item__label">{idx + 1}</span>
      <span className="task__item__controls">
        <span
          className="task__item__controls__toggleCompletion"
          onClick={() => toggleCompletion(task.id)}
        >
          {completionStatusText}
        </span>
        <span
          className="task__item__controls__remove"
          onClick={() => removeTask(task.taskId)}
        >
          X
        </span>
      </span>
    </li>
  );
};

export default Task;
