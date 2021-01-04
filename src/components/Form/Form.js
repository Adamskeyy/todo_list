import React from "react";
import { useState } from "react";

import Input from "../Input/Input";
import MainButton from "../Buttons/MainButton/MainButton";
import "./Form.css";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitTask = (e) => {
    e.preventDefault();
    if (task && /\S/.test(String(task))) {
      addTask(task);
      setTask("");
    } else {
      console.log("Whitespace is not a valid input!");
      // alert/modal/text above input
    }
  };

  return (
    <form autoComplete="off" onSubmit={submitTask} className="form">
      <Input
        value={task}
        changeHandler={setTask}
        labelText="Add the task samurai..."
      />
      <MainButton
        btnType="basic"
        btnContent="create new task_"
        labelContent="r25"
      />
    </form>
  );
};

export default Form;
