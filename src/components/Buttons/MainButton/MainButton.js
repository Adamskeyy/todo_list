import React from "react";
import "./MainButton.css";

const Button = ({btnContent, labelContent, typeOfBtn, clicked, defaultActiveFilter}) => {

  let btnClasses = typeOfBtn;
  const buttonClicked = () => {
    clicked()
    if (defaultActiveFilter === btnContent) {
      btnClasses = 'btn btn--secondary active'
    }
    console.log(btnClasses)
  }
  

  return (
    <button type="submit" className={btnClasses} onClick={buttonClicked}>
      <span className="btn__content">{btnContent}</span>
      <span className="btn__glitch"></span>
      <span className="btn__label">{labelContent}</span>
    </button>
  );
};

export default Button;
