import React from "react";
import {
  InputError,
  InputGroupStyle,
  InputLabel,
  InputStyle,
} from "./InputGroup.style";

const InputGroup = ({ props, label, placeholder = null, error,register }) => {
  return (
    <InputGroupStyle>
      <InputLabel>{label}</InputLabel>
      <InputStyle type="type" {...register} placeholder={placeholder} />
      {error && <InputError>{`* ${error}`}</InputError>}
    </InputGroupStyle>
  );
};

export default InputGroup;
