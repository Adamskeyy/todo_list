import React from "react";
import "./TaskList.css";
import Task from "./Task/Task";

const TaskList = ({ tasks, removeTask, toggleCompletion }) => {
  return (
    <ul className="task__list">
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleCompletion={toggleCompletion}
          idx={index}
        />
      ))}
    </ul>
  );
};

export default TaskList;
