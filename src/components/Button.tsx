import React, { FC } from "react";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  backgroundColor?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  title = "",
  className = "button__primary",
  backgroundColor = "",
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {title ? title : children}
    </button>
  );
};

export default Button;
