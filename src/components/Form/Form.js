import React from "react";
import { useState } from "react";

import MainButton from "../Buttons/MainButton/MainButton";
import "./Form.css";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitTask = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form autoComplete="off" onSubmit={submitTask} className="form">
      <label htmlFor="input" className="form__label">
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
      </label>
      <MainButton
        btnType="basic"
        btnContent="create new task_"
        labelContent="r25"
      />
    </form>
  );
};

export default Form;
