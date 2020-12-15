import React from "react";

import "./Search.css";
import Button from '../Button/Button'

const Search = React.memo(({ enteredFilter, displayFilteredTasks }) => {
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
      <Button btnContent='All' labelContent="r26" typeOfBtn="btn btn--secondary" onClick={() => {}} />
      <Button btnContent='Active' labelContent="r27" typeOfBtn="btn btn--secondary" />
      <Button btnContent='Done' labelContent="r28" typeOfBtn="btn btn--secondary" />
    </div>
    </>
  );
});

export default Search;
