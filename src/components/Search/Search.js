import React from "react";
import { useState } from "react";

import "./Search.css";

const Search = ({ searchTask }) => {
  const [searchInput, setSearchInput] = useState("");

  const findTask = (val) => {
    setSearchInput(val);
    if (searchInput) {
      searchTask(searchInput);
    }
  };
  return (
    <form
      autoComplete="off"
      className="form__control"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="input" className="form__input">
        <input
          required
          type="text"
          id="input"
          placeholder="&nbsp;"
          value={searchInput}
          onChange={(e) => {
            findTask(e.target.value);
          }}
        />
        <span className="label">Find task...</span>
        <span className="focus-bg"></span>
      </label>
    </form>
  );
};

export default Search;
