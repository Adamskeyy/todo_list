import { useState, useEffect, useRef } from "react";
// import { v4 as uuid_v4 } from "uuid";
import axios from "axios";
// import app from "../../firebase";
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

  const inputRef = useRef();

  // Get tasks from Firebase on first render and everytime search input changes (after 0.5s delay to reduce number of requests)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        setLoading(true);
        if (token) {
          const usersTasksQuery = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
          const queryParams =
            enteredFilter.length === 0
              ? usersTasksQuery
              : `${usersTasksQuery}&orderBy="title"&equalTo="${enteredFilter}"`;
          axios
            .get(
              "https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos.json" +
                queryParams
            )
            .then((res) => {
              const fetchedTasks = [];
              for (const key in res.data) {
                fetchedTasks.push({
                  taskId: key,
                  ...res.data[key],
                });
              }
              setTasks(fetchedTasks);
              setLoading(false);
            })
            .catch((err) => console.log(err));
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [token, userId, enteredFilter]);

  // Add Task
  const addTask = (task) => {
    let newTask = {
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
        setTasks((tasks) => {
          return [...tasks, newTask];
        });
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
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete selected tasks
  const deleteTasks = (selectedTasks) => {
    // const tasksToDelete = [];
    const tasksLeft = [...tasks].filter(
      (item) => !selectedTasks.some((other) => item.id === other.id)
    );
    setTasks(tasksLeft);
  };

  // Toggle completion state
  const toggleTask = (taskId) => {
    const index = tasks.findIndex((task) => task.taskId === taskId);
    const updatedTasks = [...tasks];
    const toggledTask = { ...tasks[index] };
    toggledTask.completed = !toggledTask.completed;
    updatedTasks[index] = toggledTask;
    setTasks(updatedTasks);
  };

  // Filtering tasks
  const filteredTasks =
    tasks &&
    tasks.filter((task) => {
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
  // if (tasks.length > 0) {

  // }
  searchTab = (
    <Search
      tasks={tasks}
      ref={inputRef}
      defaultActiveFilter={defaultActiveFilter}
      changeActiveFilter={(filter) => setDefaultActiveFilter(filter)}
      enteredFilter={enteredFilter}
      displayFilteredTasks={(filter) =>
        setEnteredFilter(filter.toLocaleLowerCase())
      }
    />
  );

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
