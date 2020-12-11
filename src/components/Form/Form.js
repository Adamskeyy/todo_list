import React from "react";
import { useState } from "react";

import Button from "../Button/Button";
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
      <Button />
    </form>
  );
};

export default Form;
