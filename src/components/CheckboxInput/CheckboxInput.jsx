import React from "react";
import { CheckboxInputStyle } from "./CheckboxInput.style";

const CheckboxInput = ({ name = "", id = "", handleChange, isChecked }) => {
  return (
    <CheckboxInputStyle
      type="checkbox"
      name={name}
      id={id}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckboxInput;
