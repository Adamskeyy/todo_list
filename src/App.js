import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import Search from "./components/Search/Search";

function App() {
  const [tasks, setTasks] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  const filteredTasks = tasks.filter((task) => {
    return task.name.toLocaleLowerCase().includes(enteredFilter);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (!tasks.length) {
      setEnteredFilter("");
    }
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

  let itemsToDisplay = enteredFilter ? filteredTasks : tasks;

  let searchTab;
  if (tasks.length > 0) {
    searchTab = (
      <Search
        enteredFilter={enteredFilter}
        displayFilteredTasks={(filter) => setEnteredFilter(filter)}
      />
    );
  }

  return (
    <div className="App">
      <h1 className="header__glitch">
        <span aria-hidden="true">TO DO LIST</span>
        TO DO LIST
        <span aria-hidden="true">TO DO LIST</span>
      </h1>
      <Form addTask={addTask} />
      {searchTab}
      {!filteredTasks.length ? (
        <div>No matches, adjust filter.</div>
      ) : (
        <TaskList
          tasks={itemsToDisplay}
          removeTask={deleteTask}
          toggleCompletion={toggleTask}
        />
      )}
    </div>
  );
}

export default App;