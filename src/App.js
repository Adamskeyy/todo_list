import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: uuid_v4(),
      name: task,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} removeTask={deleteTask} />
    </div>
  );
}

export default App;
