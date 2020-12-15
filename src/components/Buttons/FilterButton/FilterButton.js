import React from "react";
import "./FilterButton.css";

const FilterButton = ({
  btnContent,
  labelContent,
  clicked,
  defaultActiveFilter,
}) => {
  let isBtnActive = "";
  if (defaultActiveFilter === btnContent) {
    isBtnActive = "active";
  }

  return (
    <button
      type="submit"
      className={`btn--secondary ${isBtnActive}`}
      onClick={clicked}
    >
      <span className={`btn__content ${isBtnActive}`}>{btnContent}</span>
      <span className="btn__label">{labelContent}</span>
    </button>
  );
};

export default FilterButton;
