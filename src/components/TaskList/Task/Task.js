import React, { useState, useEffect } from "react";
import "./Task.css";
import SmallSpinner from "../../SpinnerSmall/SpinnerSmall";

const Task = ({ task, removeTask, idx, toggleCompletion }) => {
  const [loading, setLoading] = useState(false);

  let completionStatusText, taskItemClasses;
  if (task.completed) {
    completionStatusText = "DONE";
    taskItemClasses = "task__item task__item--completed";
  } else {
    completionStatusText = "ACTIVE";
    taskItemClasses = "task__item";
  }

  useEffect(() => {
    setLoading(false);
  }, [task]);

  const handleToggle = () => {
    setLoading(true);
    toggleCompletion(task.taskId);
  };

  return (
    <li className={taskItemClasses}>
      <div className="task__item__content">{task.name}</div>
      <div className="task__item__label">{idx + 1}</div>
      <div className="task__item__controls">
        <div
          className="task__item__controls__toggleCompletion"
          onClick={handleToggle}
        >
          {loading ? <SmallSpinner /> : completionStatusText}
        </div>
        <div
          className="task__item__controls__remove"
          onClick={() => removeTask(task.taskId)}
        >
          X
        </div>
      </div>
    </li>
  );
};

export default Task;
