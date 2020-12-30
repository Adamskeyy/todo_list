import React, { forwardRef, useEffect } from "react";

import Input from "../Input/Input";
import "./Search.css";
import FilterButton from "../Buttons/FilterButton/FilterButton";

const Search = forwardRef((props, ref) => {
  const {
    enteredFilter,
    displayFilteredTasks,
    defaultActiveFilter,
    changeActiveFilter,
  } = props;

  // useEffect(() => {
  //   console.log(ref.current.value);
  // }, [ref]);

  return (
    <>
      <form
        autoComplete="off"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          ref={ref}
          value={enteredFilter}
          changeHandler={displayFilteredTasks}
          labelText="Find task..."
        />
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
});

export default Search;
