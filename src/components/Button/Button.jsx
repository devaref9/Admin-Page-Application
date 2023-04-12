import React from "react";
import { ButtonStyle } from "./Button.style";

const Button = ({ children, className, type, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} type={type} className={className}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
