import React from "react";
import "./FilterButton.css";

const FilterButton = ({
  btnContent,
  labelContent,
  clicked,
  defaultActiveFilter,
}) => {
  let filterBtnClasses = "filter__button",
    filterBtnCntClasses = "filter__button__content";
  if (defaultActiveFilter === btnContent) {
    filterBtnClasses = "filter__button filter__button--active";
    filterBtnCntClasses =
      "filter__button__content filter__button__content--active";
  }

  return (
    <button type="submit" className={filterBtnClasses} onClick={clicked}>
      <span className={filterBtnCntClasses}>{btnContent}</span>
      <span className="filter__button__label">{labelContent}</span>
    </button>
  );
};

export default FilterButton;
