import React from "react";

import "./Search.css";
import MainButton from '../Buttons/MainButton/MainButton'

const Search = React.memo(({ enteredFilter, displayFilteredTasks, defaultActiveFilter, changeActiveFilter }) => {

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
        <MainButton btnContent='all' labelContent="r26" typeOfBtn="btn btn--secondary" defaultActiveFilter={defaultActiveFilter} clicked={() => changeActiveFilter('all')} />
        <MainButton btnContent='active' labelContent="r27" typeOfBtn="btn btn--secondary" defaultActiveFilter={defaultActiveFilter} clicked={() => changeActiveFilter('active')} />
        <MainButton btnContent='done' labelContent="r28" typeOfBtn="btn btn--secondary" defaultActiveFilter={defaultActiveFilter} clicked={() => changeActiveFilter('done')} />
      </div>
    </>
  );
});

export default Search;
