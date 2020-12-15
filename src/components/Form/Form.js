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
    <form autoComplete="off" onSubmit={submitTask} className="form__control">
      <label htmlFor="input" className="form__input">
        <input
          required
          type="text"
          id="input"
          placeholder="&nbsp;"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <span className="label">Add the task samurai...</span>
        <span className="focus-bg"></span>
      </label>
      <MainButton btnContent='create new task' labelContent="r25" typeOfBtn="btn" />
    </form>
  );
};

export default Form;
