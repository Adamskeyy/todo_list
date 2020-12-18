import React from "react";
import classes from "./MainButton.module.css";

const MainButton = ({ btnContent, labelContent, btnType, clicked }) => {
  let modifier;
  if (btnType === "delete") {
    modifier = classes.buttonDelete;
  } else {
    modifier = classes.buttonBasic;
  }
  return (
    <button
      type="submit"
      className={`${classes.button} ${modifier}`}
      onClick={btnType === "delete" ? clicked : undefined}
    >
      <span className={classes.button__content}>{btnContent}</span>
      <span className={classes.button__glitch}></span>
      <span className={classes.button__label}>{labelContent}</span>
    </button>
  );
};

export default MainButton;
