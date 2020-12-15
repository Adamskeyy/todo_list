import React from "react";

import "./Search.css";

const Search = React.memo(({ enteredFilter, displayFilteredTasks }) => {
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
            displayFilteredTasks(e.target.value.toLocaleLowerCase());
          }}
        />
        <span className="label">Find task...</span>
        <span className="focus-bg"></span>
      </label>
    </form>
  );
});

export default Search;
