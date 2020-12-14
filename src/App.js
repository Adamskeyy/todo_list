import { useState, useEffect, useCallback } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import Search from "./components/Search/Search";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

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
      completed: false,
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

  const displayFilteredTasks = useCallback(
    (filteredTasks) => {
      setFilteredTasks(filteredTasks);
    },
    [setFilteredTasks]
  );

  const searchTab =
    tasks.length > 1 ? (
      <Search tasks={tasks} displayFilteredTasks={displayFilteredTasks} />
    ) : null;

  return (
    <div className="App">
      <h1 className="header__glitch">
        <span aria-hidden="true">TO DO LIST</span>
        TO DO LIST
        <span aria-hidden="true">TO DO LIST</span>
      </h1>
      <Form addTask={addTask} />
      {searchTab}
      <TaskList
        tasks={filteredTasks}
        removeTask={deleteTask}
        toggleCompletion={toggleTask}
      />
    </div>
  );
}

export default App;
