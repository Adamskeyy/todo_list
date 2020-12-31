import React, { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  const { value, changeHandler, labelText } = props;

  return (
    <label htmlFor="input" className="form__label">
      <input
        ref={ref}
        required
        type="text"
        className="form__input"
        placeholder="&nbsp;"
        value={value}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      />
      <span className="form__spanLabel">{labelText}</span>
      <span className="form__focusBg"></span>
    </label>
  );
});

export default Input;
