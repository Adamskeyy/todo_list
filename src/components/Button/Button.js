import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <button type="submit" className="btn">
      <span className="btn__content">Create new task_</span>
      <span className="btn__glitch"></span>
      <span className="btn__label">r25</span>
    </button>
  );
};

export default Button;
