import React from "react";

import "./Search.css";
import FilterButton from "../Buttons/FilterButton/FilterButton";

const Search = React.memo(
  ({
    enteredFilter,
    displayFilteredTasks,
    defaultActiveFilter,
    changeActiveFilter,
  }) => {
    return (
      <>
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
        <div className="filter__buttons">
          <FilterButton
            btnContent="all"
            labelContent="r26"
            defaultActiveFilter={defaultActiveFilter}
            clicked={() => changeActiveFilter("all")}
          />
          <FilterButton
            btnContent="active"
            labelContent="r27"
            defaultActiveFilter={defaultActiveFilter}
            clicked={() => changeActiveFilter("active")}
          />
          <FilterButton
            btnContent="done"
            labelContent="r28"
            defaultActiveFilter={defaultActiveFilter}
            clicked={() => changeActiveFilter("done")}
          />
        </div>
      </>
    );
  }
);

export default Search;
