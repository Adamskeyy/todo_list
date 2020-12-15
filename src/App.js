import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import Search from "./components/Search/Search";
import DeleteButton from "./components/Buttons/DeleteButton/DeleteButton";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [defaultActiveFilter, setDefaultActiveFilter] = useState("all");
  const [enteredFilter, setEnteredFilter] = useState("");

  // Get tasks from local storage if there are any
  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  // Set tasks in local storage anytime their numbers changes and reset filters if there are no tasks left
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (!tasks.length) {
      setEnteredFilter("");
      setDefaultActiveFilter("all");
    }
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    const newTask = {
      id: uuid_v4(),
      name: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Delete selected tasks
  const deleteTasks = (selectedTasks) => {
    console.log(selectedTasks);
  };

  // Toggle completion state
  const toggleTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    const toggledTask = { ...tasks[index] };
    toggledTask.completed = !toggledTask.completed;
    updatedTasks[index] = toggledTask;
    setTasks(updatedTasks);
  };

  // Filtering tasks
  const filteredTasks = tasks.filter((task) => {
    return task.name.toLocaleLowerCase().includes(enteredFilter);
  });

  let itemsToDisplay;

  if (defaultActiveFilter === "all") {
    itemsToDisplay = filteredTasks;
  } else if (defaultActiveFilter === "done") {
    itemsToDisplay = filteredTasks.filter((task) => task.completed);
  } else {
    itemsToDisplay = filteredTasks.filter((task) => !task.completed);
  }

  // Show searchbar if there is at least 1 task
  let searchTab, filterWarning, deleteBtn;
  if (tasks.length > 0) {
    searchTab = (
      <Search
        defaultActiveFilter={defaultActiveFilter}
        changeActiveFilter={(filter) => setDefaultActiveFilter(filter)}
        enteredFilter={enteredFilter}
        displayFilteredTasks={(filter) => setEnteredFilter(filter)}
      />
    );
  }

  // Show warning message if there are no matches found through filters
  if (!itemsToDisplay.length && enteredFilter) {
    filterWarning = <div>No matches found</div>;
  }

  // Render delete button if there are any selected tasks
  deleteBtn = itemsToDisplay.length ? (
    <DeleteButton
      btnContent="delete selected tasks_"
      labelContent="r29"
      clicked={() => deleteTasks(itemsToDisplay)}
    />
  ) : null;

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
      {searchTab}
      {filterWarning}
      <TaskList
        tasks={itemsToDisplay}
        removeTask={deleteTask}
        toggleCompletion={toggleTask}
      />
      {deleteBtn}
    </div>
  );
};

export default App;
