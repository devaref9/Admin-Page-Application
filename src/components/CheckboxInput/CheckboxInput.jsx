import React from "react";
import { CheckboxInputStyle } from "./CheckboxInput.style";
import Button from "../Button/Button";

const CheckboxInput = ({
  name = "",
  id = "",
  handleChange,
  isChecked,
  style,
}) => {
  return (
    <CheckboxInputStyle
      style={style}
      type="checkbox"
      name={name}
      id={id}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckboxInput;
