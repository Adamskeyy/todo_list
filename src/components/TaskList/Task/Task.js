import React from "react";
import "./Task.css";

const Task = ({ task, removeTask, idx, toggleCompletion }) => {
  return (
    <li className="task__item">
      <span className="task__item__content">{task.name}</span>
      <span className="task__item__label">{idx + 1}</span>
      <span className="task__item__controls">
        <span
          className="task__item__controls__toggleCompletion"
          onClick={() => toggleCompletion(task.id)}
        >
          {task.completed ? "DONE" : "PENDING..."}
        </span>
        <span
          className="task__item__controls__remove"
          onClick={() => removeTask(task.id)}
        >
          X
        </span>
      </span>
    </li>
  );
};

export default Task;
