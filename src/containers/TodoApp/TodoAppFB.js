import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";
import "./TodoApp.css";
import Form from "../../components/Form/Form";
import TaskList from "../../components/TaskList/TaskList";
import Search from "../../components/Search/Search";
import MainButton from "../../components/Buttons/MainButton/MainButton";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [defaultActiveFilter, setDefaultActiveFilter] = useState("all");
  const [enteredFilter, setEnteredFilter] = useState("");

  const { token } = useAuth();

  // Get tasks from local storage if there are any
  useEffect(() => {
    // const tasksFromLocalStorage = localStorage.getItem("tasks");
    // if (tasksFromLocalStorage) {
    //   setTasks(JSON.parse(tasksFromLocalStorage));
    //   }
    axios
      .get(
        "https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos.json?auth=" +
          token
      )
      .then((res) => {
        setTasks(Object.values(res.data));
      })
      .catch((err) => console.log(err));
  }, [token]);

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
    axios
      .post(
        "https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos.json?auth=" +
          token,
        newTask
      )
      .then((res) => {
        setTasks([...tasks, newTask]);
      })
      .catch((err) => console.log(err));
  };

  // Delete Task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Delete selected tasks
  const deleteTasks = (selectedTasks) => {
    const tasksLeft = [...tasks].filter(
      (item) => !selectedTasks.some((other) => item.id === other.id)
    );
    setTasks(tasksLeft);
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
        displayFilteredTasks={(filter) =>
          setEnteredFilter(filter.toLocaleLowerCase())
        }
      />
    );
  }

  // Show warning message if there are no matches found through filters and there are still tasks to display with different filters
  if (!itemsToDisplay.length && tasks.length) {
    filterWarning = <p>No matches found</p>;
  }

  // Render delete button if there are any selected tasks
  deleteBtn = itemsToDisplay.length ? (
    <MainButton
      btnType="delete"
      btnContent="delete selected tasks_"
      labelContent="r29"
      clicked={() => deleteTasks(itemsToDisplay)}
    />
  ) : null;

  return (
    <div className="TodoApp">
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

export default TodoApp;
