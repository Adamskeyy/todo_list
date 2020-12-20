import React from "react";
import "./MainButton.css";

const MainButton = ({ btnContent, labelContent, btnType, clicked }) => {
  let modifier;
  if (btnType === "delete") {
    modifier = "buttonDelete";
  } else {
    modifier = "buttonBasic";
  }
  return (
    <button
      type="submit"
      className={`button ${modifier}`}
      onClick={btnType === "delete" ? clicked : undefined}
    >
      <span className="button__content">{btnContent}</span>
      <span className="button__glitch"></span>
      <span className="button__label">{labelContent}</span>
    </button>
  );
};

export default MainButton;
