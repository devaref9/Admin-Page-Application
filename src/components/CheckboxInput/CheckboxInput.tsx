import React from "react";
import { CheckboxInputStyle } from "./CheckboxInput.style";

type CheckboxPropTypes = {
  name?: string;
  id?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  style?: React.CSSProperties;
};

const CheckboxInput = ({
  name,
  id,
  handleChange,
  isChecked,
  style,
}: CheckboxPropTypes) => {
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
