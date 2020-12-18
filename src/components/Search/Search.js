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
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="input search" className="form__label">
            <input
              required
              type="text"
              className="form__input"
              placeholder="&nbsp;"
              value={enteredFilter}
              onChange={(e) => {
                displayFilteredTasks(e.target.value.toLocaleLowerCase());
              }}
            />
            <span className="form__spanLabel">Find task...</span>
            <span className="form__focusBg"></span>
          </label>
        </form>
        <div className="filter">
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
