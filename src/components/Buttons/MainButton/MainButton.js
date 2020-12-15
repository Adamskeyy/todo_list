import React from "react";
import "./MainButton.css";

const MainButton = ({ btnContent, labelContent, typeOfBtn }) => {
  return (
    <button type="submit" className={typeOfBtn}>
      <span className="btn__content">{btnContent}</span>
      <span className="btn__glitch"></span>
      <span className="btn__label">{labelContent}</span>
    </button>
  );
};

export default MainButton;