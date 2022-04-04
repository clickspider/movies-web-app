import React, { FC } from "react";

interface IconContainerProps {
  className?: string;
}

const IconContainer: FC<IconContainerProps> = ({
  children,
  className = "icon-container",
}) => {
  return <span className={`icon-container ${className}`}>{children}</span>;
};

export default IconContainer;
