import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";
import "./TodoApp.css";
import Form from "../../components/Form/Form";
import TaskList from "../../components/TaskList/TaskList";
import Search from "../../components/Search/Search";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import Spinner from "../../components/Spinner/Spinner";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [defaultActiveFilter, setDefaultActiveFilter] = useState("all");
  const [enteredFilter, setEnteredFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, userId } = useAuth();

  // Get tasks from Firebase
  useEffect(() => {
    setLoading(true);
    if (token) {
      const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
      axios
        .get(
          "https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos.json" +
            queryParams
        )
        .then((res) => {
          const fetchedTasks = Object.values(res.data).map((task, index) => ({
            ...task,
            taskId: Object.keys(res.data)[index],
          }));
          setTasks(fetchedTasks);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [token, userId]);

  // Add Task
  const addTask = (task) => {
    let newTask = {
      id: uuid_v4(),
      name: task,
      completed: false,
      userId: userId,
    };
    axios
      .post(
        "https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos.json?auth=" +
          token,
        newTask
      )
      .then((res) => {
        newTask = { ...newTask, taskId: res.data.name };
        setTasks([...tasks, newTask]);
      })
      .catch((err) => console.log(err));
  };

  // Delete Task
  const deleteTask = (taskId) => {
    axios
      .delete(
        `https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos/${taskId}.json?auth=${token}`
      )
      .then((res) => {
        console.log(res);
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
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
      {/* <TaskList
        tasks={itemsToDisplay}
        removeTask={deleteTask}
        toggleCompletion={toggleTask}
      /> */}
      {!loading ? (
        <TaskList
          tasks={itemsToDisplay}
          removeTask={deleteTask}
          toggleCompletion={toggleTask}
        />
      ) : (
        <Spinner />
      )}
      {deleteBtn}
    </div>
  );
};

export default TodoApp;
