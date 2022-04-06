import React, { FC } from "react";
import icons from "../assets/icons";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  backgroundColor?: string;
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  title = "",
  className = "button__primary",
  backgroundColor = "",
  isLoading = false,
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {isLoading ? <icons.iconLoading /> : <>{title ? title : children}</>}
    </button>
  );
};

export default Button;
