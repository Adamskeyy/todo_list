import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: uuid_v4(),
      name: task,
      completed: true,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    const toggledTask = { ...tasks[index] };
    toggledTask.completed = !toggledTask.completed;
    updatedTasks[index] = toggledTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className="header__glitch">
        <span aria-hidden="true">TO DO LIST</span>
        TO DO LIST
        <span aria-hidden="true">TO DO LIST</span>
      </h1>
      <Form addTask={addTask} />
      <TaskList
        tasks={tasks}
        removeTask={deleteTask}
        toggleCompletion={toggleTask}
      />
    </div>
  );
}

export default App;
