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
      {/* <label htmlFor="input" className="form__label">
        <input
          required
          type="text"
          className="form__input"
          placeholder="&nbsp;"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <span className="form__spanLabel">Add the task samurai...</span>
        <span className="form__focusBg"></span>
      </label> */}
      <MainButton
        btnType="basic"
        btnContent="create new task_"
        labelContent="r25"
      />
    </form>
  );
};

export default Form;
