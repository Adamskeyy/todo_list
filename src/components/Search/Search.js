import React from "react";
import { useState, useEffect } from "react";

import "./Search.css";

const Search = React.memo(({ tasks, displayFilteredTasks }) => {
  const [enteredFilter, setEnteredFilter] = useState("");

  const filteredTasks = tasks.filter((task) => {
    return task.name.toLocaleLowerCase().includes(enteredFilter);
  });

  const itemsToDisplay = enteredFilter && filteredTasks;

  useEffect(() => {
    if (enteredFilter) {
      displayFilteredTasks(itemsToDisplay);
    } else {
      displayFilteredTasks(tasks);
    }
  }, [enteredFilter, displayFilteredTasks, itemsToDisplay, tasks]);

  return (
    <form
      autoComplete="off"
      className="form__control"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="input search" className="form__input">
        <input
          required
          type="text"
          id="input search"
          placeholder="&nbsp;"
          value={enteredFilter}
          onChange={(e) => {
            setEnteredFilter(e.target.value.toLocaleLowerCase());
          }}
        />
        <span className="label">Find task...</span>
        <span className="focus-bg"></span>
      </label>
    </form>
  );
});

export default Search;
