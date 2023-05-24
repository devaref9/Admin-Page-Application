import React, { ReactNode } from "react";
import { ButtonStyle } from "./Button.style";

type ButtonPropTypes = {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className,
  type="button",
  onClick,
  style,
}: ButtonPropTypes) => {
  return (
    <ButtonStyle
      style={style}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
