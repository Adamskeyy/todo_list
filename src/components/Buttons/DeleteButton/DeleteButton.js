import React from "react";
import "./DeleteButton.css";

const DeleteButton = ({ btnContent, labelContent, clicked }) => {
  return (
    <button type="submit" className="btn--delete" onClick={clicked}>
      <span className="btn__content">{btnContent}</span>
      <span className="btn__glitch"></span>
      <span className="btn__label">{labelContent}</span>
    </button>
  );
};

export default DeleteButton;
