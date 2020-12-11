import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul className="task__list">
      {tasks.map((task) => (
        <li
          className="task__item"
          key={task.id}
          onClick={() => removeTask(task.id)}
        >
          {task.name}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
